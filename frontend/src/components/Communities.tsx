import * as React from 'react'

import * as Types from '../types'
import * as Styles from '../styles'

interface Props {
  communities: Types.Community[]
}

export class Communities extends React.Component<Props> {
  public render() {
    return (
      <div className={Styles.flexColumn}>
        <h2>Communities List</h2>
      </div>
    )
  }
}
