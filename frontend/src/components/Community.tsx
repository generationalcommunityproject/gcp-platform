import * as React from 'react'
import Link from 'redux-first-router-link'

import * as Types from '../types'
import * as Styles from '../styles'
import * as Constants from '../constants'

interface Props {
  community: Types.Community
}

export class Communities extends React.Component<Props> {
  public render() {
    return (
      <div className={Styles.flexColumn}>
        <h2>Communities List</h2>
        {/* TODO */}
        <button>New Community</button>
        <Link
          className={Styles.link}
          to={{
            type: Constants.Routes.COMMUNITY,
            payload: {
              id: 1,
            },
          }}
        >
          Boulder
        </Link>
        <Link
          className={Styles.link}
          to={{
            type: Constants.Routes.COMMUNITY,
            payload: {
              id: 2,
            },
          }}
        >
          Denver
        </Link>
        <Link
          className={Styles.link}
          to={{
            type: Constants.Routes.COMMUNITY,
            payload: {
              id: 3,
            },
          }}
        >
          L.A.
        </Link>
        <Link
          className={Styles.link}
          to={{
            type: Constants.Routes.COMMUNITY,
            payload: {
              id: 4,
            },
          }}
        >
          New York
        </Link>
      </div>
    )
  }
}
