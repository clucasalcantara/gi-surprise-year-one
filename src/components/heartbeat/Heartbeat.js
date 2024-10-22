import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Heart } from '../../assets/svg'

const Container = styled.div`
  color: ${({ theme }) => theme.colors.contrast};
  svg {
    height: 65px;
    animation-name: heartbeat;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
  }
`
const HeartAnimation = styled.div`
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.97);
    }
    35% {
      transform: scale(0.9);
    }
    45% {
      transform: scale(1.1);
    }
    55% {
      transform: scale(0.9);
    }
    65% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const Heartbeat = () => (
  <Container>
    <HeartAnimation />
    <Heart />
  </Container>
)
