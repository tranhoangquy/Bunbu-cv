import { Switch } from 'react-router-dom'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../constants/index'

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
}
const userReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        requesting: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        requesting: false,
        data: payload.data,
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: payload.message,
      }
    default:
      return state
  }
}
export default userReducer
