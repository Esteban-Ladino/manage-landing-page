import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  width: 345px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 35px 0;
  background: ${({ theme }) => theme.varyLightGray};
  & figure {
    position: absolute;
    left: 0;
    right: 0;
    top: -38px;
    & img {
      height: 72px;
    }
  }
  & h4 {
    margin: 23px 0;
  }
  & p {
    padding: 0 40px;
    font-size: .9rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.darkGrayishBlue};
  }
  @media screen and (min-width: 769px) {
    width: 520px;
  }
`
