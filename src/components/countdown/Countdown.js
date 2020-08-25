import React, { useEffect, useState} from 'react'
import { getTimeLeft } from "./date-evaluation"

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
        <div>
            {
                timerComponents.length ? (
                    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <span>{timerComponents}</span>
                        <span>Soon your surprise will be available!</span>
                    </div>
                ) : <span>Time's up!</span>
            }
        </div>  
    );
}