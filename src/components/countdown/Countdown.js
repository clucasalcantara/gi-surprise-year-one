import React, { useEffect, useState} from 'react'
import styled from "@emotion/styled"
// UI Elements
import { Heartbeat } from '../heartbeat'
// Utils
import { getTimeLeft, buildTimePieces } from "./datetime-utils"
import { MediaQueries } from '../../styles'

const Container = styled.div`
    position: fixed;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: #FDD5C8;
    color: #F9476C;
    font-size: 18px;
    ${MediaQueries.mobile} {
        font-size: 16px;
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
        font-size: 13px;
    }
`

const Timer = styled.span`
    font-weight: 800;
    margin-top: 1rem;
`

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft("09/17/2020"));
    const timePieces = buildTimePieces(timeLeft)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft("09/17/2020"));
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <Container>
            {
                timePieces.length ? (
                    <CountdownWrapper>
                        <Heartbeat />
                        <Timer>{timePieces}</Timer>
                        <SurpriseSpoilerWrapper>
                            <p>My Love,</p>
                            <span>Your surprise will be available soon!</span>
                        </SurpriseSpoilerWrapper>
                    </CountdownWrapper>
                ) : <span>Time's up!</span>
            }
        </Container>  
    );
}