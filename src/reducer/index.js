import userReducer from './userReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  users: userReducer,
})
export default (state, action) => reducers(state, action)
