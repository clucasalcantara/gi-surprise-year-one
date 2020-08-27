import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
// UI Elements
import { Heartbeat } from '../heartbeat'
// Utils
import { getTimeLeft, buildTimePieces } from './datetime-utils'
import { MediaQueries } from '../../styles'

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
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

const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SurpriseSpoilerWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 5px;
    font-weight: 800;
  }
  ${MediaQueries.mobile} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  ${MediaQueries.smaller} {
    font-size: ${({ theme }) => theme.font.sizes.micro};
  }
`

const Timer = styled.span`
  font-weight: 800;
  margin-top: 1rem;
`

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft('09/17/2020'))
  const timePieces = buildTimePieces(timeLeft)
  const theme = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft('09/17/2020'))
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Container theme={theme}>
      {timePieces.length ? (
        <CountdownWrapper>
          <Heartbeat />
          <Timer>{timePieces}</Timer>
          <SurpriseSpoilerWrapper>
            <p>My Love,</p>
            <span>Your surprise will be available soon!</span>
          </SurpriseSpoilerWrapper>
        </CountdownWrapper>
      ) : (
        <span>{`Time's up!`}</span>
      )}
    </Container>
  )
}
