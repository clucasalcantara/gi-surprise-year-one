import React, { useState } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Answers } from '../answers'
// Services
import { saveAnswer } from '../../services'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.sand};
  padding: 1rem;
  z-index: 1;
`

const Category = styled.span`
  color: gray;
  font-weight: 800;
  padding-bottom: 0.5rem;
  font-size: 14px;
`

const Enunciated = styled.h2`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`

const QuestionImage = styled.img`
  width: 200px;
  z-index: 2;
  margin-bottom: -30px;
  align-self: flex-end;
`

export const Question = ({ data }) => {
  const [answer, setAnswer] = useState(null)

  const handleAnswerScore = (answerId) => {
    setAnswer(answerId)

    if (answerId === data.answerId) {
      saveAnswer(answerId)
      return console.log('YEY! Ponto pra você!')
    }

    return console.log('Resposta errada :(')
  }

  return (
    <Container>
      <QuestionImage src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png" />
      <Wrapper>
        <Category>{data.category}</Category>
        <Enunciated>{data.enunciated}</Enunciated>
        <Answers
          handleAnswer={(value) => handleAnswerScore(value)}
          answered={answer}
          options={data.answers}
        />
      </Wrapper>
    </Container>
  )
}
