export enum Endpoint {
  Register = '/api/register',
}

export enum Routes {
  HOME = 'HOME',
  COMMUNITIES = 'COMMUNITIES',
  COMMUNITY = 'COMMUNITY',
  ISSUES = 'ISSUES',
  ISSUE = 'ISSUE',
  PROFILE = 'PROFILE',
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  NOTFOUND = '@@redux-first-router/NOT_FOUND',
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum Actions {
  USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',
  USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE',
  USER_PROFILE = 'USER_PROFILE',
  USER_LOGIN = 'USER_LOGIN',
  SET_COMMUNITIES = 'SET_COMMUNITIES',
  SET_COMMUNITY = 'SET_COMMUNITY',
  SET_ISSUES = 'SET_ISSUES',
  SET_ISSUE = 'SET_ISSUE',
  LOGOUT = 'LOGOUT',
}

export enum Role {
  communityAdvocate = 'communityAdvocate',
  solutionProvider = 'solutionProvider',
  responsibleParty = 'responsibleParty',
}
