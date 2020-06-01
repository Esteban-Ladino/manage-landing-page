import React from 'react'
import { Btn } from './styles'

export const Button = (props) => {
  const {
    text
  } = props

  return (
    <Btn>{text}</Btn>
  )
}
