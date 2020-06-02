import styled from 'styled-components'

export const StyledMain = styled.main`
  max-width: 1125px;
  margin: 0 auto;
  & h1 {
    padding: 0 70px;
    letter-spacing: -2px;
    font-size: 1.95rem;
    color: ${({ theme }) => theme.darkBlue};
    text-align: center;
  }
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    & h1 {
      padding: 0;
      font-size: 2.6rem;
      text-align: initial;
      line-height: 1;
    }
  }
`

export const P = styled.p`
  margin: 20px 0 55px;
  padding: 0 40px;
  font-size: .9rem;
  color: ${({ theme }) => theme.darkGrayishBlue};
  line-height: 1.7rem;
  text-align: center;

  @media screen and (min-width: 769px) {
    padding: 0;
    padding-right: 40%;
    font-size: 1rem;
    text-align: initial;
  }
`
