import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
// UI Elements
import { Button } from '../button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const Option = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.text : 'white'};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in;
`

const Label = styled.span`
  margin-left: 0.5rem;
`

export const Answers = ({ handleAnswer, answered, options }) => {
  const theme = useTheme()

  return (
    <Wrapper>
      {options.map(({ label }) => (
        <OptionWrapper key={label} onClick={() => handleAnswer(label)}>
          <Option theme={theme} checked={answered === label} />
          <Label>{label}</Label>
        </OptionWrapper>
      ))}
      {answered && <Button theme={theme}>Answer</Button>}
    </Wrapper>
  )
}
