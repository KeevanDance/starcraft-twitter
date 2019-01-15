import React from 'react'
import FilterBox from './FilterBox'

class Region extends React.Component {
  state = {
    northAmerica: false,
    europe: false,
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
        <label htmlFor="europe">
          <input id="europe" type="checkbox" checked={this.state.northAmerica} onChange={this.onToggle} name="europe" />
          Europe
        </label>
      </FilterBox>
    )
  }
}

export default Region;