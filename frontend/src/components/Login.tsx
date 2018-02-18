import * as React from 'react'

import * as Styles from '../styles'
import * as Actions from '../actions'
import * as Types from '../types'
import * as Constants from '../constants'
import Store from '../store'

import {Input} from './Input'

interface Props {}

interface State {
  username: string
  password: string
}

export class Login extends React.Component<Props, State> {
  public state = {username: '', password: ''}

  private onFieldValueChange = (fieldName: string, value: string) => {
    this.setState({...this.state, [fieldName]: value})
  }

  private onLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
  }

  private selectUser = (role: Constants.Role) => () => {
    Store.dispatch(Actions.routeLogin(role))
  }

  public render() {
    return (
      <div className={Styles.flexColumn}>
        <h2>Select a Demo User Role</h2>
        <i>For demonstration purposes only!</i>
        <button onClick={this.selectUser(Constants.Role.communityAdvocate)}>
          Community Advocate
        </button>
        <button onClick={this.selectUser(Constants.Role.solutionProvider)}>
          Solution Provider
        </button>
        <button onClick={this.selectUser(Constants.Role.responsibleParty)}>
          Responsible Party
        </button>
        <form onSubmit={this.onLogin}>
          <Input
            name="username"
            label="username"
            value={this.state.username}
            onChange={this.onFieldValueChange}
          />

          <Input
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.onFieldValueChange}
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}
