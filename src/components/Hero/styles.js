import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: 769px) {
    display: grid;
    margin-top: 93px;
    grid-template-columns: 1fr 1fr;
    & figure {
      order: 1;
    }
  }
`

export const Img = styled.img`
  height: 290px;
  @media screen and (min-width: 769px) {
    height: 500px;
  }
`

export const Intro = styled.div`
  text-align: center;
  margin: 0 30px;
  & h1 {
    font-size: 2.5rem;
    line-height: 2.85rem;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.darkBlue}
  } 
  & p {
    margin: 15px 0;
    font-weight: 400;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.darkGrayishBlue}
  }
  & button {
    margin: 20px 0;
  }
  @media screen and (min-width: 769px) {
    text-align: left;
    & h1 {
      font-size: 3.5rem;
      line-height: 3.8rem;
    }
    & p {
      margin: 30px 0;
      padding-right: 150px;
    }
  }
`
