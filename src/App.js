import React from 'react';
import { GlobalStyle } from './styles';
import { useTheme } from 'emotion-theming'
// UI Elements
import { Countdown } from "./components/countdown"

export const App = () => {
  const theme = useTheme()  
  
  return (
    <>
      <GlobalStyle theme={theme} />
      <Countdown />
    </>
  )
}

