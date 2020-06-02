import styled from 'styled-components'
import mobileBackground from '../../assets/static/bg-simplify-section-mobile.svg'
import desktopBackground from '../../assets/static/bg-simplify-section-desktop.svg'

export const Section = styled.section`
  position: relative;
  height: 405px;
  background: ${({ theme }) => theme.brightRed};
  padding-top: 100px;
  @media screen and (min-width: 769px) {
    height: 220px;
    padding-top: 70px;
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  height: 405px;
  width: 100%;
  background: url(${mobileBackground});
  background-repeat: no-repeat;
  background-position: left;
  @media screen and (min-width: 769px) {
    height: 220px;
    background: url(${desktopBackground});
    background-position: bottom;
    background-position-x: right;
  }
`

export const Div = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1160px;
  margin: 0 auto;
  & h1 {
    padding: 0 35px;
    margin-bottom: 15px;
    font-size: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.varyLightGray};
  }
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
    & h1 {
      text-align: left;
      line-height: 2.7rem;
      padding-left: 0;
    }
    & button {
      justify-self: end;
      cursor: pointer;
    }
  }
`
