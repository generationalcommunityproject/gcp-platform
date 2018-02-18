import * as Constants from './constants'

export type Route = Constants.Routes | null

export interface Error {
  type: string
  code: number
  message: string
}

export type Address = string
export type ID = string

export interface UserRegistration {
  email: string
  displayName: string
  password: string
  community: string
  about: string
  role: Constants.Role
}

export interface Profile {
  initialized: boolean
  id: ID
  address?: Address
  username: string
  community: string
  role: Constants.Role
}

export interface Advocate {
  id: ID
  username: string
  community: string
}

export interface Community {
  id: ID
  description: string
  location: string
  advocates: Advocate[]
}

export interface Issue {
  advocate: ID
}

export interface AppState {
  route: Constants.Routes
  profile: Profile
  communities: Community[]
  issues: Issue[]
}
