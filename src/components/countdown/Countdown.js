import React, { useEffect, useState} from 'react'
import styled from "@emotion/styled"
// Utils
import { getTimeLeft } from "./date-evaluation"

const Container = styled.div`
    position: fixed;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    top: 0;
    left: 0;
`

const CountdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft("09/17/2020"));


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft("09/17/2020"));
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <Container>
            {
                timerComponents.length ? (
                    <CountdownWrapper>
                        <span>{timerComponents}</span>
                        <span>Soon your surprise will be available!</span>
                    </CountdownWrapper>
                ) : <span>Time's up!</span>
            }
        </Container>  
    );
}