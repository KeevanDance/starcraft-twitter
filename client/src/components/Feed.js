import React from 'react'

class Feed extends React.Component {
  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    return (
      <h4>Tweets!</h4>
    )
  }
}

export default Feed