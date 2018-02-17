import * as React from 'react'

import * as Styles from '../styles'
import * as Actions from '../actions'
import * as Types from '../types'
import Store from '../store'

interface Props {}

interface State {}

export class Login extends React.Component<Props, State> {
  private selectUser = (role: Types.Role) => () => {
    Store.dispatch(Actions.routeLogin(role))
  }

  public render() {
    return (
      <div className={Styles.flexColumn}>
        <h2>Select a Demo User Role</h2>
        <i>For demonstration purposes only!</i>
        <button onClick={this.selectUser(Types.Role.communityAdvocate)}>
          Community Advocate
        </button>
        <button onClick={this.selectUser(Types.Role.solutionProvider)}>
          Solution Provider
        </button>
        <button onClick={this.selectUser(Types.Role.responsibleParty)}>
          Responsible Party
        </button>
      </div>
    )
  }
}
