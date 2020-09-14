import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Button } from '../../components/button'
import { Page } from '../../components/layout'
import { Countdown } from '../../components/countdown'
import { Modal } from '../../components/modal'
import { Tips } from '../../components/tips'
// Assets
import { Lovely } from '../../assets/svg'
// Services
import {
  getScore,
  getTips,
  getQuestionByDate,
  exchangeTips,
} from '../../services'

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

const TipsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
`

const TipsInfo = styled.span`
  display: flex;
  align-items: center;
  margin-top: 4rem;
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
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [tips, setTips] = useState([])
  const today = new Date().setHours(0, 0, 0, 0)
  const tipsReleaseDate = new Date('09/16/2020').setHours(0, 0, 0, 0)
  const dailyQuestion = getQuestionByDate(today)

  useEffect(() => {
    const currentScore = getScore()
    const availableTips = getTips()

    setScore(currentScore - availableTips.length)
    setTips(availableTips)
  }, [score])

  const scoreComplement = score > 1 || score === 0 ? 'pontos' : 'ponto'
  const tipsComplement = tips.length > 1 || tips.length === 0 ? 'dicas' : 'dica'

  return (
    <Page>
      <Wrapper>
        <Countdown />
        {score > 0 && today === tipsReleaseDate && (
          <>
            <Score>
              {`Você tem ${score} ${scoreComplement}`}
              <Lovely width="20px" height="20px" />
            </Score>
            <Button
              disabled={score < 1}
              label="Trocar pontos por dicas"
              clickAction={() => {
                exchangeTips(tips)

                window.location.reload()
              }}
            />
          </>
        )}
        {tips.length > 0 && (
          <TipsWrapper>
            <TipsInfo>
              {`Você tem ${tips.length} ${tipsComplement}`}
              <Lovely width="20px" height="20px" />
            </TipsInfo>
            <Button
              label="Visualizar suas dicas"
              clickAction={() => setModalIsOpen(true)}
            />
          </TipsWrapper>
        )}
        {dailyQuestion && !dailyQuestion.answered && (
          <DailyQuestionWrapper>
            <DailyQuestion>
              Olarr, Você tem uma pergunta disponível!!
            </DailyQuestion>
            <AnswerButton href={`/quiz/${dailyQuestion.id}`}>
              Responder
            </AnswerButton>
          </DailyQuestionWrapper>
        )}
        {dailyQuestion && dailyQuestion.answered && (
          <DailyQuestionWrapper>
            <DailyQuestion>Você já respondeu a pergunta de hoje!</DailyQuestion>
          </DailyQuestionWrapper>
        )}
        {!dailyQuestion && !dailyQuestion.answered && (
          <DailyQuestionWrapper>
            <DailyQuestion>Sem perguntas hoje!</DailyQuestion>
          </DailyQuestionWrapper>
        )}
        <Modal title="Suas dicas" isOpen={modalIsOpen}>
          <Tips dataset={tips} handleDismiss={() => setModalIsOpen(false)} />
        </Modal>
      </Wrapper>
    </Page>
  )
}
