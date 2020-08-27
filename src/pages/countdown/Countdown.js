import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
// UI Elements
import { Page } from '../../components/layout'
import { Countdown } from '../../components/countdown'
import { Lovely } from '../../assets/svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DailyQuestionWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  svg {
    margin-left: 1rem;
  }
`
const DailyQuestion = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
`

export const CountdownPage = () => {
  const theme = useTheme()

  return (
    <Page>
      <Wrapper>
        <Countdown />
        <DailyQuestionWrapper>
          <DailyQuestion href="/quiz" theme={theme}>
            Ir para a pergunta do dia
          </DailyQuestion>
          <Lovely width="30px" height="30px" />
        </DailyQuestionWrapper>
      </Wrapper>
    </Page>
  )
}
