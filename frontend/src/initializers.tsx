import * as Types from './types'

export const createProfile = (): Types.Profile => ({
  initialized: false,
  id: '',
  address: null,
  username: '',
  community: '',
  role: Types.Role.communityAdvocate, // Default
})
