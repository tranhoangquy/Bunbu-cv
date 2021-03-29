import adminReducer from './adminReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  users: adminReducer,
})
export default (state, action) => reducers(state, action)
