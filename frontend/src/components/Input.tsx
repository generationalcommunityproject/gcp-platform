import * as React from 'react'

import * as Styles from '../styles'

interface Props {
  type?: string
  name: string
  label: string
  placeholder?: string
  value: string
  onChange: (fieldName: string, value: string) => void
  error?: string
  autoFocus?: boolean
}

export const Input: React.SFC<Props> = props => (
  <div className={formatWrapperClass(props)}>
    <label htmlFor={props.name}>{props.label}</label>
    <div className={Styles.formField}>
      <input
        type={props.type || 'text'}
        name={props.name}
        className={Styles.formInput}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChangeInput(props)}
        autoFocus={props.autoFocus}
      />
    </div>
    <div className={Styles.formHelp}>{props.error}</div>
  </div>
)

const formatWrapperClass = (props: Props): string =>
  props.error ? `${Styles.formGroup} ${Styles.formError}` : Styles.formGroup

const onChangeInput = (props: Props) => (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  props.onChange(e.target.name, e.target.value)
}
