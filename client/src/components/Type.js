import React from 'react'
import FilterBox from './FilterBox'

class Type extends React.Component {
  state = {
    team: false,
    orgCompany: false,
    player: false,
  }

  onToggle = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: !prevState[name] }))
  }

  render() {
    return (
      <FilterBox title="Type">
        <label htmlFor="team">
          <input id="team" type="checkbox" checked={this.state.team} onChange={this.onToggle} name="team" />
          Team
        </label>
        <label htmlFor="orgCompany">
          <input id="orgCompany" type="checkbox" checked={this.state.orgCompany} onChange={this.onToggle} name="orgCompany" />
          Org/Company
        </label>
        <label htmlFor="player">
          <input id="player" type="checkbox" checked={this.state.player} onChange={this.onToggle} name="player" />
          Player
        </label>
      </FilterBox>
    )
  } 
}

export default Type;