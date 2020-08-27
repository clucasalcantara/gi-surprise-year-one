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
`

const Option = styled.input`
  margin-bottom: 1rem;
`

const Label = styled.span`
  margin-left: 0.5rem;
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

export const Answers = ({ handleAnswer, answered }) => {
  const theme = useTheme()

  return (
    <Wrapper>
      {options.map(({ label }) => (
        <OptionWrapper key={label}>
          <Option
            theme={theme}
            value={label}
            type="radio"
            onChange={(event) => handleAnswer(event)}
            checked={answered === label}
          />
          <Label>{label}</Label>
        </OptionWrapper>
      ))}
      {answered && <Button theme={theme}>Answer</Button>}
    </Wrapper>
  )
}
