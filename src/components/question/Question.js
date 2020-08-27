import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  const [answer, setAnswer] = useState(null)

  const handleAnswer = (answerId) => setAnswer(answerId)

  const submitAnswer = () => {
    if (answer === data.answerId) {
      saveAnswer(answer)
      alert('YEY! Ponto pra você!')

      return history.goBack()
    }

    return alert('Resposta errada :(')
  }

  return (
    <Container>
      <QuestionImage src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png" />
      <Wrapper>
        <Category>{data.category}</Category>
        <Enunciated>{data.enunciated}</Enunciated>
        <Answers
          handleAnswer={(value) => handleAnswer(value)}
          submitAnswer={() => submitAnswer()}
          answered={answer}
          options={data.answers}
        />
      </Wrapper>
    </Container>
  )
}
