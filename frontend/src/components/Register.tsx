import * as React from 'react'

import * as Styles from '../styles'

import {Input} from './Input'

interface Props {}

interface State {
  username: string
  password: string
}

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
    console.log(this.state)
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
