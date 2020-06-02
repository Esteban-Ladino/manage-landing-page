import React from 'react'
import { StyledButton } from './styles'

export const Button = (props) => {
  const {
    text,
    white
  } = props

  return (
    <StyledButton white={white}>{text}</StyledButton>
  )
}
