import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
// UI Elements
import { Answers } from '../answers'

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

const options = [
  {
    label: 'Bla',
  },
  {
    label: 'Ble',
  },
  {
    label: 'Bli',
  },
  {
    label: 'Blo',
  },
  {
    label: 'Blu',
  },
]

export const Question = () => {
  const theme = useTheme()
  const [answer, setAnswer] = useState(null)
  console.log({ answer })

  return (
    <Container>
      <QuestionImage src="https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png" />
      <Wrapper theme={theme}>
        <Category>Disney</Category>
        <Enunciated>Como diz Olaf: Por que eu sei que com o tempo?</Enunciated>
        <Answers
          handleAnswer={(value) => setAnswer(value)}
          answered={answer}
          options={options}
        />
      </Wrapper>
    </Container>
  )
}
