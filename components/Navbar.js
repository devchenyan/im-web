import React, { Component, PropTypes } from 'react'


export default class Navbar extends Component {
  render() {
    const { navItem } = this.props

    console.log(navItem);
    return (
      <div>
        <h1>
          {navItem.title}
        </h1>
      </div>
    )
  }
}

Navbar.propTypes = {
  navItem: PropTypes.object.isRequired
}
