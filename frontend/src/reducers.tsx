import {reducerWithInitialState} from 'typescript-fsa-reducers'

import * as Actions from './actions'
import * as Types from './types'
import * as Constants from './constants'
import * as Initializers from './initializers'

export const profile = reducerWithInitialState<Types.Profile>(
  Initializers.createProfile()
)
  .case(Actions.userProfile, (state, data) => ({
    ...state,
    ...data,
  }))
  .case(Actions.userLogout, state => Initializers.createProfile())
  .case(Actions.routeNotFound, state => Initializers.createProfile())

export const route = reducerWithInitialState<Types.Route>(null)
  .case(Actions.routeHome, () => Constants.Routes.HOME)
  .case(Actions.routeCommunities, () => Constants.Routes.COMMUNITIES)
  .case(Actions.routeIssues, () => Constants.Routes.ISSUES)
  .case(Actions.routeProfile, () => Constants.Routes.PROFILE)
  .case(Actions.routeLogin, () => Constants.Routes.LOGIN)
  .case(Actions.routeRegister, () => Constants.Routes.REGISTER)
  .case(Actions.routeNotFound, () => Constants.Routes.NOTFOUND)
