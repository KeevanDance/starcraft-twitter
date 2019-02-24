import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Feed from './Feed'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

async function fetchApi() {
  const data = await fetch('http://localhost:8080/status')
  console.log(data);
}

function App() {
  fetchApi()
  return (
    <Container>
      <h1>Starcraft Twitter</h1>
      <Header />
      <Feed />
    </Container>
  )
}

export default App
