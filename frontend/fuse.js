const path = require('path')
const express = require('express')
const {FuseBox, WebIndexPlugin, QuantumPlugin} = require('fuse-box')
const {src, task, watch, context} = require('fuse-box/sparky')

context(
  class {
    getConfig() {
      return FuseBox.init({
        homeDir: 'src/',
        output: this.isProduction
          ? '../public/static/$name.$hash.js'
          : '../public/static/$name.js',
        target: 'browser@es5',
        hash: this.isProduction,
        useTypescriptCompiler: true,
        log: true,
        debug: true,
        sourceMaps: this.isProduction
          ? false
          : {
              project: true,
              vendor: false,
            },
        plugins: [
          WebIndexPlugin({
            path: './static/',
            template: './index.tpl.html',
          }),
          this.isProduction &&
            QuantumPlugin({
              // bakeApiIntoBundle: 'app',
              uglify: {es6: true},
              treeshake: true,
            }),
        ],
      })
    }

    createBundle(fuse) {
      fuse.bundle('vendor').instructions('~ index.tsx')

      const app = fuse.bundle('app')

      if (!this.isProduction) {
        app.watch()
        app.hmr()
      }

      app.instructions('!> [index.tsx]')

      return app
    }
  }
)

task('clean', () =>
  src('../public')
    .clean('../public')
    .exec()
)

task('default', ['clean'], async context => {
  const fuse = context.getConfig()

  fuse.dev({root: false, port: 8080}, server => {
    const public = path.resolve('../public')
    const app = server.httpServer.app
    app.use('/static/', express.static(path.join(public, 'static')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(public, 'static/index.html'))
    })
  })

  context.createBundle(fuse)
  await fuse.run()
})

task('public', ['clean'], async context => {
  context.isProduction = true
  const fuse = context.getConfig()
  context.createBundle(fuse)
  await fuse.run()
})
