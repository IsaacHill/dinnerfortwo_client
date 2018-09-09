import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.name}
        </div>
      </div>
    )
  }
}

export default Link