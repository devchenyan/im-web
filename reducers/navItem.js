import {CHANGE_NAVITEM} from '../actions'
// import merge from 'lodash/merge'
// import { routerReducer as routing } from 'react-router-redux'

const initialState =
  {
    title : '消息',
    itemNum : 2
  }


//setup the item of Navbar
export default function navItem(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAVITEM:
      return Object.assign({}, state, { title: action.text })

    default:
      return state
  }
}
