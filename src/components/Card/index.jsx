import React from 'react'
import { StyledCard } from './styles'

export const Card = (props) => {
  const {
    avatar,
    name,
    review
  } = props

  return (
    <StyledCard>
      <figure>
        <img src={avatar} alt='Avatar image' />
      </figure>
      <h4>{name}</h4>
      <p>{review}</p>
    </StyledCard>
  )
}
