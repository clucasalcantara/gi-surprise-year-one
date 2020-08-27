import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  font-weight: 600;
  height: 40px;
  border-radius: 10px;
  border: 0 none;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.text : theme.colors.disabled};
  color: ${({ theme }) => theme.colors.sand};
  font-size: 16px;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}
  transition: all 0.3s ease-in;
`

export const Button = ({ clickAction, label, disabled }) => (
  <StyledButton disabled={disabled} onClick={() => clickAction()}>
    {label}
  </StyledButton>
)

Button.defaultProps = {
  label: 'Answer',
}
