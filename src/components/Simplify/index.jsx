import React from 'react'
import { Button } from '../Button'
import { Section, Background, Div } from './styles'

export const Simplify = () => {
  return (
    <Section>
      <Background />
      <Div>
        <h1>Simplify how your team works today.</h1>
        <Button white text='Get Started' />
      </Div>
    </Section>
  )
}
