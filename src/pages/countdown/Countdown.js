import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Button } from '../../components/button'
import { Page } from '../../components/layout'
import { Countdown } from '../../components/countdown'
// Assets
import { Lovely } from '../../assets/svg'
// Services
import { getScore, getQuestionByDate } from '../../services'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DailyQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  padding: 1rem;
  svg {
    position: absolute;
    margin-left: 1rem;
    margin-bottom: -4rem;
  }
`

const DailyQuestion = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`

const Score = styled.span`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 500;

  svg {
    margin-left: 0.5rem;
  }
`

const AnswerButton = styled.a`
  font-size: 12px;
  margin-top: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

export const CountdownPage = () => {
  const [score, setScore] = useState(0)
  const dailyQuestion = getQuestionByDate(new Date())

  useEffect(() => {
    const currentScore = getScore()
    setScore(currentScore)
  }, [score])

  const scoreComplement = score > 1 || score === 0 ? 'pontos' : 'ponto'

  return (
    <Page>
      <Wrapper>
        <Countdown />
        {score > 0 && (
          <>
            <Score>
              {`Você tem ${score} ${scoreComplement}`}
              <Lovely width="20px" height="20px" />
            </Score>
            <Button disabled label="Trocar pontos por dicas" />
          </>
        )}
        {dailyQuestion && (
          <DailyQuestionWrapper>
            <DailyQuestion>
              Olarr, Você tem uma pergunta disponível!!
            </DailyQuestion>
            <AnswerButton href={`/quiz/${dailyQuestion.id}`}>
              Responder
            </AnswerButton>
          </DailyQuestionWrapper>
        )}
      </Wrapper>
    </Page>
  )
}
