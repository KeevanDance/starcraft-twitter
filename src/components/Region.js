import React from 'react'
import FilterBox from './FilterBox'

class Region extends React.Component {
  state = {
    northAmerica: false,
  }

  onToggle = (e) => {
    const {name} = e.target;
    this.setState((prevState) => ({ [name]: !prevState[name] }))
  }

  render() {
    return (
      <FilterBox title="Region">
        <label htmlFor="northAmerica">
          <input id="northAmerica" type="checkbox" checked={this.state.northAmerica} onChange={this.onToggle} name="northAmerica" />
          North America
        </label>
      </FilterBox>
    )
  }
}

export default Region;