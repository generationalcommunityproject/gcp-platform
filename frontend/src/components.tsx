import * as React from 'react'
import Link from 'redux-first-router-link'

import * as Types from './types'
import * as Constants from './constants'
import * as Styles from './styles'

export const Home: React.SFC<{}> = ({}) => (
  <div className={Styles.flexColumn}>
    <h2>Home</h2>
    <a
      href="https://github.com/generationalcommunityproject/gcp-platform"
      target="_blank"
    >
      Help Contribute to our Open Source Development on GitHub!
    </a>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/generational-community-project.appspot.com/o/home.jpg?alt=media&token=8ed3ef64-3bd1-432b-86ab-d3201f75e6a9"
      className={Styles.fullWidth}
    />
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
