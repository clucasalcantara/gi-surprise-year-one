import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { MediaQueries, GlobalStyle } from '../../styles'

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  ${MediaQueries.mobile} {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  ${MediaQueries.smaller} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`

export const Page = ({ children }) => {
  const theme = useTheme()

  return (
    <Container theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </Container>
  )
}
