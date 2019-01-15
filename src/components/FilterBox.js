import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  border: solid;
  width: 300px;
  height: 150px;
`

const Title = styled.h5`
  margin: -10px 0 0 0;
  width: fit-content;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
`

function FilterBox({ title, children }) {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  )
}

export default FilterBox