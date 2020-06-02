import styled from 'styled-components'

export const Article = styled.article`
  padding-left: 15px;
  margin-bottom: 50px;
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    & h4 {
      position: absolute;
      z-index: -1;
      width: 90%;
      height: 39px;
      background: ${({ theme }) => theme.veryPaleRed};
      margin-left: 20px;
      padding-left: 62px;
      padding-top: 6px;
      color: ${({ theme }) => theme.darkBlue};
    }
  }
  & p {
    font-size: .9rem;
    color: ${({ theme }) => theme.darkGrayishBlue};
    line-height: 1.7rem;
  }

  @media screen and (min-width: 769px) {
    & div {
       & h4 {
        background: transparent;
        width: auto;
       }
    }
    & p {
      padding-left: 82px;
    }
  }
`

export const Span = styled.span`
  padding: 8px 24px;
  height: fit-content;
  border-radius: 50px;
  background: ${({ theme }) => theme.brightRed};
  font-weight: 500;
  color: white;
`
