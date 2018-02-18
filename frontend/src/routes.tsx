import * as router from 'redux-first-router'
import {createBrowserHistory} from 'history'
import * as querystring from 'querystring'

import * as Types from './types'
import * as Actions from './actions'
import * as Constants from './constants'

const history = createBrowserHistory()

const routesMap = {}

routesMap[Constants.Routes.HOME] = '/'
routesMap[Constants.Routes.COMMUNITIES] = {
  path: '/communities',
  thunk: Actions.getCommunities,
}
routesMap[Constants.Routes.COMMUNITY] = {
  path: '/communities/:id',
  thunk: Actions.getCommunity,
}
// TODO communities/new
routesMap[Constants.Routes.ISSUES] = '/issues'
routesMap[Constants.Routes.ISSUE] = '/issues/:id'
// TODO issue/new
routesMap[Constants.Routes.PROFILE] = '/profile'
routesMap[Constants.Routes.REGISTER] = '/register'
routesMap[Constants.Routes.LOGIN] = '/login'

export default router.connectRoutes(history, routesMap, {
  querySerializer: querystring,
})
