import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

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
`

export const Button = ({ clickAction, label, disabled }) => {
  const theme = useTheme()

  return (
    <StyledButton disabled={disabled} theme={theme} onClick={clickAction}>
      {label}
    </StyledButton>
  )
}

Button.defaultProps = {
  label: 'Answer',
}
