import React from 'react'
import styled from 'styled-components'
import FilterBox from './FilterBox'

function Header() {
  return (
    <>
      <h1>Starcraft Twitter</h1>
      <FilterBox title="Region" />
    </>
  )
}

export default Header