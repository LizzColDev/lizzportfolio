import { style } from '@vanilla-extract/css'

export const header = style({
  alignItems: 'center',
  borderBottom: '1px solid #eee',
  display: 'flex',
  gap: '16px',
  padding: '8px 32px'
})

export const link = style({
  color: '#384151',
  textDecoration: 'none',
  fontSize: '18px',
  margin: '0'
})

export const logo = style({
  width: '48px',
  height: 'auto'
})
