import React from 'react'
import { Button } from '../Button'
import Logo from '../Logo'
import { Icon, StyledHeader, Ul} from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo dark />
      <Ul>
        <li><a href='/'>Pricing</a></li>
        <li><a href='/'>Product</a></li>
        <li><a href='/'>About Us</a></li>
        <li><a href='/'>Careers</a></li>
        <li><a href='/'>Community</a></li>
      </Ul>
      <Button text='Get Started' />
      <Icon />
    </StyledHeader>
  )
}
