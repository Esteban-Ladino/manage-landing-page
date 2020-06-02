import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: 535px;
  background: ${({ theme }) => theme.veryDarkBlue};
  padding-top: 50px;
  padding-bottom: 33px;

  @media screen and (min-width: 769px) {
    height: 250px;
  }
`

export const Container = styled.div`
  max-width: 1125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & small {
    margin-top: 25px;
    color: ${({ theme }) => theme.darkGrayishBlue};
  }

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template: 1fr 1fr / repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & form {
      grid-column: 3;
      justify-self: end;
    }
    & small {
      grid-column: 3;
      grid-row: 2;
      justify-self: end;
    }
    & figure {
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
    }
  }
`

export const Input = styled.input`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 15px 60px 15px 20px;
  border: none;
  border-radius: 50px;
  outline: none;
  border: ${({ theme, error }) => error ? `1px solid ${theme.brightRed}` : 'none'};
  color: ${({ theme, error }) => error ? theme.brightRed : theme.darkBlue};
  @media screen and (min-width: 769px) {
    padding-right: 9px;
    margin-bottom: 0;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  width: 80px;
  height: 44px;
  background: ${({ theme }) => theme.brightRed};
  font-size: .83rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.varyLightGray};
  outline: 0;
  &:hover {
    filter: brightness(120%) contrast(90%) grayscale(40%);
    cursor: pointer;
  }
  @media screen and (min-width: 769px) {
    width: 65px;
    font-size: .68rem;
    text-transform: capitalize;
  }
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 100%;
  margin: 50px 0;
  & li {
    margin-bottom: 13px;
  }
  & a {
    font-size: .85rem;
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.varyLightGray};
    &:hover {
      color: ${({ theme }) => theme.brightRed};
    }
  }

  @media screen and (min-width: 769px) {
    grid-row: 1/3;
    grid-column: 2;
    margin: 0;
    justify-items: start;
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 50px;
  font-family: 'icomoon';
  & > i {
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    font-size: 1.9rem;
    color: ${({ theme }) => theme.varyLightGray};
    &:hover {
      color: ${({ theme }) => theme.brightRed};
      cursor: pointer;
    }
  }
  .Facebook:before {
    content: "\\ea91";
  }
  .Youtube:before {
    content: "\\e900";
  }
  .Twitter:before {
    content: "\\ea96";
  }
  .Pinterest:before {
    content: "\\ead1";
  }
  .Instagram:before {
    content: "\\ea92";
  }

  @media screen and (min-width: 769px) {
    align-self: end;
    justify-content: start;
    margin-bottom: 15px;
    & > i {
      font-size: 1.2rem;
      margin-right: 12px;
    }
  }
`

export const Label = styled.label`
  font-size: .8rem;
  margin-left: 10px;
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.brightRed};
`
