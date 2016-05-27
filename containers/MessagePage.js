import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class MessagePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>messagePage======</h1>
      </div>
    )
  }
}

export default connect()(MessagePage)
