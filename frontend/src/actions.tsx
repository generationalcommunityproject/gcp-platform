import actionCreatorFactory from 'typescript-fsa'
import {NOT_FOUND} from 'redux-first-router'

import * as Types from './types'

const actionCreator = actionCreatorFactory()

// Route actions
export const routeHome = actionCreator<{}>(Types.Routes.HOME)
export const routeCommunities = actionCreator<{}>(Types.Routes.COMMUNITIES)
export const routeIssues = actionCreator<{}>(Types.Routes.ISSUES)
export const routeProfile = actionCreator<{}>(Types.Routes.PROFILE)
export const routeRegister = actionCreator<{}>(Types.Routes.REGISTER)
export const routeLogin = actionCreator<{}>(Types.Routes.LOGIN)
export const routeNotFound = actionCreator<{}>(NOT_FOUND)

// User actions
export const userProfile = actionCreator<Types.Profile>(
  Types.Actions.USER_PROFILE
)
export const userLogin = actionCreator<Types.Role>(Types.Actions.USER_LOGIN)
export const userLogout = actionCreator<{}>(Types.Actions.LOGOUT)
