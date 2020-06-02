import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  width: 138px;
  height: 44px;
  background: ${({ theme, white }) => white ? theme.varyLightGray : theme.brightRed};
  font-size: .83rem;
  font-weight: 500;
  color: ${({ theme, white }) => white ? theme.brightRed : theme.varyLightGray};;
  outline: 0;
  box-shadow: 0px 9px 12px -3px rgba(242,95,58,0.63);
  &:hover {
    filter: brightness(154%) contrast(141%) grayscale(24%);
    cursor: pointer;
  }
`
