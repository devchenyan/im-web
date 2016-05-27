import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import { changeNavItem } from '../actions'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChangeClick = this.handleChangeClick.bind(this)
  }

  handleChangeClick() {
    this.props.changeNavItem('朋友圈')
  }

  render() {
    const { children, navItem } = this.props
    return (
      <div>
        <Navbar navItem= {navItem}></Navbar>
        <ul className="nav nav-tabs" >
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>

        <Tabbar></Tabbar>

        <button onClick={this.handleChangeClick}>改变nav</button>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  navItem: PropTypes.object,
  changeNavItem: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    navItem: state.navItem,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeNavItem }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
