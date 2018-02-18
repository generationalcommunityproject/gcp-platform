import {CSSProperties} from 'react'
import {css} from 'glamor'

const cssstr = (obj: CSSProperties): string => css(obj).toString()

const linkColor = {
  color: '#fff',
}

export const link = cssstr({
  ...linkColor,
})

export const navLink = cssstr({
  ...linkColor,
  paddingLeft: '10px',
  ':first-child': {
    padding: '0',
  },
})

export const flexRow = cssstr({
  flexDirection: 'row',
})

export const flexColumn = cssstr({
  flexDirection: 'column',
})

export const flexCenter = cssstr({
  justifyContent: 'center',
  alignItems: 'center',
})

export const formGroup = cssstr({
  border: '1px solid #fff',
  padding: '5px',
})

export const formField = cssstr({
  border: '1px solid #fff',
  padding: '5px',
})

export const formInput = cssstr({
  border: '1px solid #fff',
  padding: '5px',
})

export const formHelp = cssstr({
  border: '1px solid #fff',
  padding: '5px',
})

export const formError = cssstr({
  border: '1px solid #f00',
  padding: '5px',
})

export const button = cssstr({
  border: '1px solid #fff',
  fontSize: '18px',
  background: 'transparent',
  color: '#fff',
  borderRadius: '2px',
  padding: '5px',
  margin: '5px',
})
