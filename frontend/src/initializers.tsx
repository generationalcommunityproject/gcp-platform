import * as Types from './types'
import * as Constants from './constants'

export const createProfile = (): Types.Profile => ({
  initialized: false,
  id: '',
  address: null,
  username: '',
  community: '',
  role: Constants.Role.communityAdvocate, // Default
})
