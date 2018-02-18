import * as React from 'react'

import * as Styles from '../styles'
import * as Actions from '../actions'
import * as Types from '../types'
import Store from '../store'

import {Input} from './Input'

interface Props {}

interface State extends Types.UserLogin {}

export class Register extends React.Component<Props, State> {
  public state = {
    username: '',
    password: '',
  }

  private onFieldValueChange = (fieldName: string, value: string) => {
    this.setState({
      ...this.state,
      [fieldName]: value,
    })
  }

  private onSave = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const data: Types.UserLogin = this.state
    Store.dispatch(Actions.userRegistrationStarted(data))
  }

  public render() {
    return (
      <div className={Styles.flexColumn}>
        <form onSubmit={this.onSave}>
          <h2>Register</h2>

          <Input
            name="username"
            label="username"
            value={this.state.username}
            onChange={this.onFieldValueChange}
            autoFocus={true}
          />

          <Input
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.onFieldValueChange}
          />

          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}
