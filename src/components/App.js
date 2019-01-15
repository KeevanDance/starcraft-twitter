import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default App
