import * as React from 'react'
import Link from 'redux-first-router-link'

import * as Types from './types'
import * as Constants from './constants'
import * as Styles from './styles'

export const Home: React.SFC<{}> = ({}) => (
  <div>
    <h2>Home</h2>
  </div>
)

export const Nav: React.SFC<{}> = ({}) => (
  <div className={Styles.flexRow}>
    <Link className={Styles.navLink} to={{type: Constants.Routes.HOME}}>
      Home
    </Link>
    <Link className={Styles.navLink} to={{type: Constants.Routes.COMMUNITIES}}>
      Communities
    </Link>
    <Link className={Styles.navLink} to={{type: Constants.Routes.ISSUES}}>
      Issues
    </Link>
    <Link className={Styles.navLink} to={{type: Constants.Routes.LOGIN}}>
      Login
    </Link>
    <Link className={Styles.navLink} to={{type: Constants.Routes.REGISTER}}>
      Register
    </Link>
  </div>
)

export const NotFound: React.SFC<{}> = ({}) => (
  <div>
    <h2>Page Not Found</h2>
  </div>
)
