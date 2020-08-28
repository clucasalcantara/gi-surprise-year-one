import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Button } from '../button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
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

export const Answers = ({ handleAnswer, submitAnswer, answered, options }) => (
  <Wrapper>
    {options.map(({ id, text }) => (
      <OptionWrapper key={id} onClick={() => handleAnswer(id)}>
        <Option checked={answered === id} />
        <Label>{text}</Label>
      </OptionWrapper>
    ))}
    <Button disabled={!answered} label="Answer" clickAction={submitAnswer} />
  </Wrapper>
)
