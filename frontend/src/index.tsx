import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {css} from 'glamor'
import {Provider as StateProvider, connect} from 'react-redux'

import * as Types from './types'
import * as Styles from './styles'
import * as Constants from './constants'
import Store from './store'

import {Nav, Home, NotFound} from './components'
import {Profile} from './components/Profile'
import {Communities} from './components/Communities'
import {Issues} from './components/Issues'
import {Register} from './components/Register'
import {Login} from './components/Login'

// Resets
css.global('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

css.global('html, body, #root', {
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #3a7bd5, #3a6073)',
  color: '#fff',
  display: 'block',
  fontFamily: 'Roboto, sans-serif',
})

css.global('div', {
  display: 'flex',
})

css.global('a:visited', {
  color: '#fff',
})

const AppContainer: React.SFC<Types.AppState> = ({
  route,
  profile,
  communities,
  issues,
}) => (
  <div className={Styles.flexColumn}>
    <Nav />
    {route === Constants.Routes.HOME && <Home />}
    {route === Constants.Routes.LOGIN && <Login />}
    {route === Constants.Routes.REGISTER && <Register />}
    {route === Constants.Routes.PROFILE && <Profile profile={profile} />}
    {route === Constants.Routes.COMMUNITIES && (
      <Communities communities={communities} />
    )}
    {route === Constants.Routes.ISSUES && <Issues issues={issues} />}
    {route === Constants.Routes.NOTFOUND && <NotFound />}
  </div>
)

const mapStateToProps = ({
  route,
  profile,
  communities,
  issues,
}: Types.AppState) => ({
  route,
  profile,
  communities,
  issues,
})

const ConnectedAppContainer = connect(mapStateToProps)(AppContainer)

const App: React.SFC<{}> = () => (
  <StateProvider store={Store}>
    <ConnectedAppContainer />
  </StateProvider>
)

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
