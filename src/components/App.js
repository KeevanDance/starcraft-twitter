import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <h1>Starcraft Twitter</h1>
      <Header />
    </Container>
  )
}

export default App
