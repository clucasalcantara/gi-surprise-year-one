import React from 'react';
import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/core';

export const GlobalStyle = ({ theme }) => {
    const bodyStyle = `
        body, html {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.regular};
        }
    `

    return (
        <Global styles={css`
                ${emotionReset}
                *, *::after, *::before {
                    box-sizing: border-box;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                    font-smoothing: antialiased;
                }
                
                ${bodyStyle}
            `} 
        />
    )
}