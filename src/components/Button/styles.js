import styled from 'styled-components'

export const Btn = styled.button`
  border: none;
  border-radius: 50px;
  width: 138px;
  height: 44px;
  background: ${({ theme }) => theme.brightRed};
  font-size: .83rem;
  font-weight: 500;
  color: white;
  outline: 0;
  &:hover {
    filter: brightness(120%) contrast(90%) grayscale(40%);
    cursor: pointer;
  }
`
