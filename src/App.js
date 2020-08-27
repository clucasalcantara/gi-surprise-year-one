import React from 'react'
import { useTheme } from 'emotion-theming'
import { GlobalStyle } from './styles'
// UI Elements
import { Countdown } from './components/countdown'

export const App = () => {
  const theme = useTheme()

  return (
    <>
      <GlobalStyle theme={theme} />
      <Countdown />
    </>
  )
}
