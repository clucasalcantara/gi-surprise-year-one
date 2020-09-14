import React, { useState } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Button } from '../button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  min-height: 60%;
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  button {
    width: 50%;
    margin-right: 0.5rem;
  }
  margin-right: 0.5rem;
`

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 100%;
  }
`

const Tip = styled.span``

const Footer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  padding: 2rem;
`

export const Tips = ({ dataset, handleDismiss }) => {
  const [activeTip, setActiveTip] = useState(0)

  return (
    <Wrapper>
      <Tip>{dataset[activeTip]}</Tip>
      <Footer>
        <ControlsWrapper>
          {dataset.length > 1 && (
            <Pagination>
              <Button
                disabled={activeTip === 0}
                label="Anterior"
                clickAction={() => setActiveTip(activeTip - 1)}
              />
              <Button
                disabled={activeTip >= dataset.length - 1}
                label="Próxima"
                clickAction={() => setActiveTip(activeTip + 1)}
              />
            </Pagination>
          )}
          <Button label="Fechar" clickAction={() => handleDismiss()} />
        </ControlsWrapper>
      </Footer>
    </Wrapper>
  )
}

Tips.defaultProps = {
  dataset: ['TIP 1', 'TIP 2', 'TIP 3', 'TIP 4', 'TIP 5'],
}
