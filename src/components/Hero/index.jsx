import React from 'react'
import { Section, Img, Intro } from './styles'
import graphics from '../../assets/static/illustration-intro.svg'
import { Button } from '../Button'

export const Hero = () => {
  return (
    <Section>
      <figure>
        <Img src={graphics} />
      </figure>
      <Intro>
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <Button text='Get Started' />
      </Intro>
    </Section>
  )
}
