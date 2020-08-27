import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Heartbeat } from '../heartbeat'
// Utils
import { getTimeLeft, buildTimePieces } from './datetime-utils'
import { MediaQueries } from '../../styles'

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft('09/17/2020'))
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {timePieces.length ? (
        <CountdownWrapper>
          <Heartbeat />
          <Timer>{timePieces}</Timer>
          <SurpriseSpoilerWrapper>
            <p>Meu amor,</p>
            <span>sua surpresa está chegando!</span>
          </SurpriseSpoilerWrapper>
        </CountdownWrapper>
      ) : (
        <span>{`Time's up!`}</span>
      )}
    </>
  )
}
