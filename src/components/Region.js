import React from 'react'
import FilterBox from './FilterBox'

class Region extends React.Component {
  state = {
    northAmerica: false,
    europe: false,
    korea: false,
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
          <input id="europe" type="checkbox" checked={this.state.europe} onChange={this.onToggle} name="europe" />
          Europe
        </label>
        <label htmlFor="korea">
          <input id="korea" type="checkbox" checked={this.state.korea} onChange={this.onToggle} name="korea" />
          Korea
        </label>
      </FilterBox>
    )
  }
}

export default Region;