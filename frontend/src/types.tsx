export enum Routes {
  HOME = 'HOME',
  COMMUNITIES = 'COMMUNITIES',
  ISSUES = 'ISSUES',
  PROFILE = 'PROFILE',
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  NOTFOUND = '@@redux-first-router/NOT_FOUND',
}

export type Route = Routes | null

export interface RoutesMap {
  [key: string]: string
}

export enum Actions {
  USER_PROFILE = 'USER_PROFILE',
  USER_LOGIN = 'USER_LOGIN',
  LOGOUT = 'LOGOUT',
}

export enum Role {
  communityAdvocate = 'communityAdvocate',
  solutionProvider = 'solutionProvider',
  responsibleParty = 'responsibleParty',
}

export type Address = string
export type ID = string

export interface Profile {
  initialized: boolean
  id: ID
  address?: Address
  username: string
  community: string
  role: Role
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
  route: Routes
  profile: Profile
  communities: Community[]
  issues: Issue[]
}
