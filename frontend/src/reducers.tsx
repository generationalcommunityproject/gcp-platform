import {reducerWithInitialState} from 'typescript-fsa-reducers'

import * as Actions from './actions'
import * as Types from './types'
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
  .case(Actions.routeHome, () => Types.Routes.HOME)
  .case(Actions.routeCommunities, () => Types.Routes.COMMUNITIES)
  .case(Actions.routeIssues, () => Types.Routes.ISSUES)
  .case(Actions.routeProfile, () => Types.Routes.PROFILE)
  .case(Actions.routeLogin, () => Types.Routes.LOGIN)
  .case(Actions.routeRegister, () => Types.Routes.REGISTER)
  .case(Actions.routeNotFound, () => Types.Routes.NOTFOUND)
