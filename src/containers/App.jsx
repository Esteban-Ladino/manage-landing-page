import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/GlobalStyles'
import { theme } from '../assets/styles/Theme'
import { Header } from '../components/Header'
import { Container } from './styles'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { Reviews } from '../components/Reviews'
import { Simplify } from '../components/Simplify'
import { Footer } from '../components/Footer'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <Main />
        <Reviews />
        <Simplify />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
