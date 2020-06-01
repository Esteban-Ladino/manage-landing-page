import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/GlobalStyles'
import { theme } from '../assets/styles/Theme'
import { Header } from '../components/Header'
import { Container } from './styles'
import { Hero } from '../components/Hero'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
      </Container>
    </ThemeProvider>
  )
}
