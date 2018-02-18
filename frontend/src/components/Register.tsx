import * as React from 'react'

import * as Styles from '../styles'
import * as Actions from '../actions'
import * as Types from '../types'
import * as Constants from '../constants'
import Store from '../store'

import {Input} from './Input'

interface Props {}

interface State extends Types.UserRegistration {}

export class Register extends React.Component<Props, State> {
  public state = {
    email: '',
    displayName: '',
    password: '',
    community: '',
    about: '',
    role: Constants.Role.communityAdvocate,
  }

  private onFieldValueChange = (fieldName: string, value: string) => {
    this.setState({
      ...this.state,
      [fieldName]: value,
    })
  }

  private setRole = (role: Constants.Role) => (
    evt: React.FormEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    this.setState({...this.state, role})
  }

  private onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const data: Types.UserRegistration = this.state
    Store.dispatch(Actions.userRegistrationStarted(data))
  }

  public render() {
    return (
      <div className={Styles.flexColumn}>
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>
          <Input
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onFieldValueChange}
            autoFocus={true}
          />
          <Input
            name="displayName"
            label="Full Name"
            value={this.state.displayName}
            onChange={this.onFieldValueChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.onFieldValueChange}
          />
          <Input
            name="community"
            label="Community"
            value={this.state.community}
            onChange={this.onFieldValueChange}
          />
          <Input
            name="about"
            label="About You"
            value={this.state.about}
            onChange={this.onFieldValueChange}
          />
          <div>What is your role within this community?</div>
          <div>
            <button
              className={Styles.button}
              onClick={this.setRole(Constants.Role.communityAdvocate)}
            >
              Community Advocate
            </button>
            <button
              className={Styles.button}
              onClick={this.setRole(Constants.Role.solutionProvider)}
            >
              Solution Provider
            </button>
            <button
              className={Styles.button}
              onClick={this.setRole(Constants.Role.responsibleParty)}
            >
              Responsible Party
            </button>
          </div>
          <input className={Styles.button} type="submit" value="Register" />
        </form>
      </div>
    )
  }
}
