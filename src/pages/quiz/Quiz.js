import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Page } from '../../components/layout'
import { Question } from '../../components/question'
import { BackArrow } from '../../assets/svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackButton = styled.a`
  position: absolute;
  top: 1rem;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
`

const question = {
  id: 1,
  category: 'Disney',
  enunciated: 'Como diz Olaf: Por que eu sei que com o tempo?',
  image: 'https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png',
  answerId: 'a',
  answers: [
    {
      id: 'a',
      text: 'Bla',
    },
    {
      id: 'b',
      text: 'Ble',
    },
    {
      id: 'c',
      text: 'Bli',
    },
    {
      id: 'd',
      text: 'Blo',
    },
    {
      id: 'f',
      text: 'Blu',
    },
  ],
}

export const QuizPage = () => (
  <Page>
    <Wrapper>
      <BackButton href="/">
        <BackArrow width="15px" height="15px" />
        Voltar
      </BackButton>
      <Question data={question} />
    </Wrapper>
  </Page>
)
