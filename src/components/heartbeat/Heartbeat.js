import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Heart } from '../../assets/svg'

const Container = styled.div`
    color: #FF8195;
    svg {
        height: 70px;
        animation-name: heartFadeInOut; 
        animation-iteration-count: infinite;
        animation-duration: 2s;
    }
`
const HeartAnimation = styled.div`
    @keyframes heartFadeInOut {
        0% {transform: scale(1);}
        25% {transform: scale(.97);}
        35% {transform: scale(.9);}
        45% {transform: scale(1.1);}
        55% {transform: scale(.9);}
        65% {transform: scale(1.1);}
        75% {transform: scale(1.03);}
        100% {transform: scale(1);}
    }
`

export const Heartbeat = () => (
    <Container>
        <HeartAnimation />
        <Heart />
    </Container>
)