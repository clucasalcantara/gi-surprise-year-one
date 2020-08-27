import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

const StyledButton = styled.button`
  font-weight: 600;
  height: 40px;
  border-radius: 10px;
  border: 0 none;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.sand};
  font-size: 16px;
`

export const Button = ({ clickAction, label }) => {
  const theme = useTheme()

  return (
    <StyledButton theme={theme} onClick={clickAction}>
      {label}
    </StyledButton>
  )
}

Button.defaultProps = {
  label: 'Answer',
}
