import * as router from 'redux-first-router'
import {createBrowserHistory} from 'history'
import * as querystring from 'querystring'

import * as Types from './types'
import * as Constants from './constants'

const history = createBrowserHistory()

const routesMap: Types.RoutesMap = {}

routesMap[Constants.Routes.HOME] = '/'
routesMap[Constants.Routes.COMMUNITIES] = '/communities'
// TODO communities/new
routesMap[Constants.Routes.ISSUES] = '/issues'
// TODO issue/new
routesMap[Constants.Routes.PROFILE] = '/profile'
routesMap[Constants.Routes.REGISTER] = '/register'
routesMap[Constants.Routes.LOGIN] = '/login'

export default router.connectRoutes(history, routesMap, {
  querySerializer: querystring,
})
