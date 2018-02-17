import * as router from 'redux-first-router'
import {createBrowserHistory} from 'history'
import * as querystring from 'querystring'

import * as Types from './types'

const history = createBrowserHistory()

const routesMap: Types.RoutesMap = {}

routesMap[Types.Routes.HOME] = '/'
routesMap[Types.Routes.COMMUNITIES] = '/communities'
// TODO communities/new
routesMap[Types.Routes.ISSUES] = '/issues'
// TODO issue/new
routesMap[Types.Routes.PROFILE] = '/profile'
routesMap[Types.Routes.REGISTER] = '/register'
routesMap[Types.Routes.LOGIN] = '/login'

export default router.connectRoutes(history, routesMap, {
  querySerializer: querystring,
})
