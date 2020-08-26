import React from 'react';
import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/core';
// UI Elements
import { Countdown } from "./components/countdown"

export const App = () => (
  <>
    <Global styles={css`
        ${emotionReset}

        *, *::after, *::before {
          font-family: 'Lora', serif;
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `} 
    />
    <Countdown />
  </>
)

