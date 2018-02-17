import * as React from 'react'

import * as Types from '../types'
import * as Styles from '../styles'

interface Props {
  profile: Types.Profile
}

export class Profile extends React.Component<Props> {
  public render() {
    const {username} = this.props.profile
    return (
      <div className={Styles.flexColumn}>
        <h2>Profile</h2>
        <div>Name</div>
        <div>{username}</div>
      </div>
    )
  }
}
