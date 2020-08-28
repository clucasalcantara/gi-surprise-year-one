import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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

const ImageWrapper = styled.div`
  min-height: 215px;
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
      <ImageWrapper>
        <LazyLoadImage
          alt="The question image"
          effect="blur"
          src={data.image}
          width="200px"
        />
      </ImageWrapper>
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
