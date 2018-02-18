import actionCreatorFactory from 'typescript-fsa'
import {NOT_FOUND} from 'redux-first-router'

import * as Types from './types'
import * as Constants from './constants'
import * as Utils from './utils'

const actionCreator = actionCreatorFactory()

// Route actions
export const routeHome = actionCreator<{}>(Constants.Routes.HOME)
export const routeCommunities = actionCreator<{}>(Constants.Routes.COMMUNITIES)
export const routeCommunity = actionCreator<{id: Types.ID}>(
  Constants.Routes.COMMUNITY
)
export const routeIssues = actionCreator<{}>(Constants.Routes.ISSUES)
export const routeIssue = actionCreator<{id: Types.ID}>(Constants.Routes.ISSUE)
export const routeProfile = actionCreator<{}>(Constants.Routes.PROFILE)
export const routeRegister = actionCreator<{}>(Constants.Routes.REGISTER)
export const routeLogin = actionCreator<{}>(Constants.Routes.LOGIN)
export const routeNotFound = actionCreator<{}>(NOT_FOUND)

// User actions
export const userProfile = actionCreator<Types.Profile>(
  Constants.Actions.USER_PROFILE
)
export const userLogin = actionCreator<Constants.Role>(
  Constants.Actions.USER_LOGIN
)
export const userLogout = actionCreator<{}>(Constants.Actions.LOGOUT)

export const userRegistrationSuccess = actionCreator<Types.Profile>(
  Constants.Actions.USER_REGISTRATION_SUCCESS
)
export const userRegistrationFailure = actionCreator<Types.Error>(
  Constants.Actions.USER_REGISTRATION_FAILURE
)
export const userRegistrationStarted = (
  registration: Types.UserRegistration
) => async (dispatch): Promise<void> => {
  let res: Response
  try {
    res = await fetch(Constants.Endpoint.Register, {
      method: Constants.HTTPMethod.POST,
      body: JSON.stringify(registration),
    })
    const data: Types.Profile = await res.json()
    dispatch(userRegistrationSuccess(data))
  } catch (error) {
    console.error(error)
    const message = await res.text()
    alert(message)
    dispatch(
      userRegistrationFailure(
        Utils.newError({
          code: res.status,
          type: Constants.Actions.USER_REGISTRATION_FAILURE,
          message: error,
        })
      )
    )
  }
}

// Community actions
export const setCommunity = actionCreator<Types.Community>(
  Constants.Actions.SET_COMMUNITY
)

export const getCommunity = (id: Types.ID) => async (
  dispatch
): Promise<void> => {
  let res: Response
  try {
    res = await fetch(Constants.Endpoint.Register, {
      method: Constants.HTTPMethod.GET,
      body: id,
    })
    const data: Types.Community = await res.json()
    dispatch(setCommunity(data))
  } catch (error) {
    console.error(error)
  }
}

export const setCommunities = actionCreator<Types.Community[]>(
  Constants.Actions.SET_COMMUNITIES
)

export const getCommunities = () => async (dispatch): Promise<void> => {
  let res: Response
  try {
    res = await fetch(Constants.Endpoint.Register, {
      method: Constants.HTTPMethod.GET,
    })
    const data: Types.Community[] = await res.json()
    dispatch(setCommunities(data))
  } catch (error) {
    console.error(error)
  }
}

export const newCommunity = (data: Types.Community) => async (
  dispatch
): Promise<void> => {
  let res: Response
  try {
    res = await fetch(Constants.Endpoint.Register, {
      method: Constants.HTTPMethod.GET,
    })
    const {id} = await res.json()
    dispatch(routeCommunity({id}))
  } catch (error) {
    console.error(error)
  }
}
