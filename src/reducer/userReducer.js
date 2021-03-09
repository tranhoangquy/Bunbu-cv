import { Switch } from 'react-router-dom'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  ADD_USER_ERROR,
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
    case ADD_USER_REQUEST:
      return {
        ...state,
        requesting: true,
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: [state.data, payload.data],
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        requesting:false,
        success:false,
        message:payload.message,
      }
    default:
      return state
  }
}
export default userReducer
