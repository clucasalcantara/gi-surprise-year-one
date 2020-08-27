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
  top: 2;
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

export const QuizPage = () => (
  <Page>
    <Wrapper>
      <BackButton href="/">
        <BackArrow width="15px" height="15px" />
        Voltar
      </BackButton>
      <Question />
    </Wrapper>
  </Page>
)
