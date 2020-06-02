import React, { useState } from 'react'
import Logo from '../Logo'
import { Container, StyledFooter, Button, Input, Nav, Social, Label } from './styles'

export const Footer = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (email === '') {
      setErrorMsg('The input field is empty')
      return
    }
    const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validator.test(email)) {
      setErrorMsg('Please insert a valid email')
    }
  }

  return (
    <StyledFooter>
      <Container>
        <form>
          <Input type='text' placeholder='Updates in your inbox…' value={email} onChange={handleChange} error={errorMsg} />
          <Button onClick={handleClick}>go</Button>
          <br />
          <Label>{errorMsg}</Label>
        </form>
        <Nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Pricing</a></li>
            <li><a href='/'>Products</a></li>
            <li><a href='/'>About Us</a></li>
          </ul>
          <ul>
            <li><a href='/'>Careers</a></li>
            <li><a href='/'>Community</a></li>
            <li><a href='/'>Privacy Policy</a></li>
          </ul>
        </Nav>
        <Social>
          <i className='Facebook' />
          <i className='Youtube' />
          <i className='Twitter' />
          <i className='Pinterest' />
          <i className='Instagram' />
        </Social>
        <Logo dark={false} />
        <small>Copyright 2020. All Rights Reserved</small>
      </Container>
    </StyledFooter>
  )
}
