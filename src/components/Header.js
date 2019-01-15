import React from 'react'
import styled from 'styled-components'

import Region from './Region'
import Role from './Role'
import Status from './Status'

const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
`

function Header() {
  return (
    <FilterContent>
      <Region />
      <Role />
      <Status />
    </FilterContent>
  )
}

export default Header