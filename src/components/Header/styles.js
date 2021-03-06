import styled from 'styled-components'
import icon from '../../assets/static/icon-hamburger.svg'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 1125px;
  margin: 0 auto;
  padding: 20px 20px 0;
  & button {
    display: none;
  }
  & img {
    width: 110px;
  }
  @media screen and (min-width: 769px) {
    & img {
      width: 145px;
    }
    & button {
      display: block;
    }
  }
`

export const Ul = styled.ul`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    font-weight: 500;
    font-size: .84rem;
    & li {
      margin: 0 13px;
      & a {
        text-decoration: none;
        color: ${({ theme }) => theme.darkBlue};
        &:hover {
          color: ${({ theme }) => theme.darkGrayishBlue};
        }
      }
    }
  }
`

export const Icon = styled.i`
  content: url(${icon});
  height: 18px;
  width: 25px;
  display: block;

  @media screen and (min-width: 769px) {
    display: none;
  }
`
