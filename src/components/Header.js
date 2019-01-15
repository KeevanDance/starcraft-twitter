import React from 'react'
import Region from './Region'
import Role from './Role'
import styled from 'styled-components'

const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
`

function Header() {
  return (
    <FilterContent>
      <Region />
      <Role />
    </FilterContent>
  )
}

export default Header