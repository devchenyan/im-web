import { combineReducers } from 'redux'
import navItem from './navItem'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  navItem,
  routing
})

export default rootReducer
