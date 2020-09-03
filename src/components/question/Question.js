import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useHistory, useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
// UI Elements
import { Answers } from '../answers'
// Services
import { getQuestionById } from '../../services'
// import { saveAnswer, getQuestionById } from '../../services'
import { saveAnswer } from '../../services/answers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
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

const ImageWrapper = styled.div`
  disply: flex;
  justify-content: center;
  align-items: center;
  min-height: 215px;
  width: 200px;
  z-index: 2;
  margin-bottom: -30px;
  align-self: flex-end;
  ${({ additionalStyle }) => additionalStyle && additionalStyle};
`

export const Question = () => {
  const history = useHistory()
  const { questionId } = useParams()
  const question = getQuestionById(questionId)
  const [answer, setAnswer] = useState(null)

  const handleAnswer = (answerId) => setAnswer(answerId)

  const submitAnswer = () => {
    if (answer === question.answerId) {
      saveAnswer(questionId, true)
      alert('YEY! Ponto pra você!')

      return history.replace('/')
    }

    saveAnswer(questionId, false)
    alert('Resposta errada :( Mais sorte na próxima!')

    return history.replace('/')
  }

  return (
    <Container>
      {question && (
        <>
          <ImageWrapper additionalStyle={question.additionalStyle}>
            <LazyLoadImage
              alt="The question image"
              effect="blur"
              src={question.image}
              width="200px"
            />
          </ImageWrapper>
          <Wrapper>
            <Category>{question.category}</Category>
            <Enunciated>{question.enunciated}</Enunciated>
            <Answers
              handleAnswer={(value) => handleAnswer(value)}
              submitAnswer={() => submitAnswer()}
              answered={answer}
              options={question.answers}
            />
          </Wrapper>
        </>
      )}
      {!question && <span> Você já respondeu a pergunta de hoje! </span>}
    </Container>
  )
}
