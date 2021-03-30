import adminReducer from './adminReducer'
import staffReducer from './staffReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  users: adminReducer,
  cvs: staffReducer,
})
export default (state, action) => reducers(state, action)
