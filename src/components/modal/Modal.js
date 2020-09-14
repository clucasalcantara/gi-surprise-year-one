import React from 'react'
import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.sand};
  border-radius: 5px;
`

const Title = styled.h2`
  font-weight: bold;
  margin-top: 1rem;
  padding-bottom: 2rem;
`

export const Modal = ({ children, title, isOpen }) => {
  if (!isOpen) return null

  return (
    <Overlay>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Overlay>
  )
}

Modal.defaultProps = {
  isOpen: false,
  title: 'Modal',
  handleDismiss: () => {},
}
