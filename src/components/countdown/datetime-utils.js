import React from 'react'

export const getTimeLeft = (dateGoal) => {
  const difference = +new Date(dateGoal) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export const buildTimePieces = (timeLeft) => {
  const timePieces = []

  Object.keys(timeLeft).forEach((interval) => {
    timePieces.push(
      <span key={interval}>
        {timeLeft[interval] || '0'} {interval}{' '}
      </span>
    )
  })

  return timePieces
}
