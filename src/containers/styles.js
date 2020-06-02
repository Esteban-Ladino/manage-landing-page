import styled from 'styled-components'
import background from '../assets/static/bg-tablet-pattern.svg'

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background: url(${background});
  background-position: top;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: -16rem;
  padding-bottom: 0px;
  @media screen and (min-width: 769px) {
    padding-top: 40px;
  }
`
