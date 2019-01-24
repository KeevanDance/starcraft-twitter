import React from 'react'
import FilterBox from './FilterBox'

class Roles extends React.Component {
  state = {
    players: false,
    commentators: false,
    streamers: false,
  }

  onToggle = (e) => {
    const {name} = e.target;
    this.setState((prevState) => ({ [name]: !prevState[name] }))
  }

  render() {
    return (
      <FilterBox title="Role">
        <label htmlFor="players">
          <input id="players" type="checkbox" checked={this.state.players} onChange={this.onToggle} name="players" />
          Players
        </label>
        <label htmlFor="commentators">
          <input id="commentators" type="checkbox" checked={this.state.commentators} onChange={this.onToggle} name="commentators" />
          Commentators
        </label>
        <label htmlFor="streamers">
          <input id="streamers" type="checkbox" checked={this.state.streamers} onChange={this.onToggle} name="streamers" />
          Streamers
        </label>
      </FilterBox>
    )
  }
}

export default Roles;