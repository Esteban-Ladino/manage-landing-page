import React from 'react'
import { Span, Article } from './styles'

export const MainItem = (props) => {
  const {
    id,
    title,
    description
  } = props

  return (
    <Article>
      <div>
        <Span>{id}</Span>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </Article>
  )
}
