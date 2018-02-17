import * as React from 'react'

import * as Types from '../types'
import * as Styles from '../styles'

interface Props {
  issues: Types.Issue[]
}

export class Issues extends React.Component<Props> {
  public render() {
    return (
      <div className={Styles.flexColumn}>
        <h2>Issues in Communities</h2>
      </div>
    )
  }
}
