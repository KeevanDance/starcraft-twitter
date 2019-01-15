import React from 'react'
import FilterBox from './FilterBox'

class Status extends React.Component {
  state = {
  active: false,
  retired: false,
  military: false,
}

onToggle = (e) => {
  const { name } = e.target;
  this.setState((prevState) => ({ [name]: !prevState[name] }))
}

render() {
  return (
    <FilterBox title="Status">
      <label htmlFor="active">
        <input id="active" type="checkbox" checked={this.state.active} onChange={this.onToggle} name="active" />
        Active
      </label>
      <label htmlFor="retired">
        <input id="retired" type="checkbox" checked={this.state.retired} onChange={this.onToggle} name="retired" />
        Retired
      </label>
      <label htmlFor="military">
        <input id="military" type="checkbox" checked={this.state.military} onChange={this.onToggle} name="military" />
        Military
      </label>
    </FilterBox>
    )
  } 
}

export default Status;