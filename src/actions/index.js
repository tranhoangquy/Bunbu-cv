import { data } from 'jquery'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../constants/index.js'
import axios from './axios'
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USERS_REQUEST })
    const response = await axios.get('/users')
    const responseBody = await response.data
    dispatch({
      type: FETCH_USERS_SUCCESS,
      data: responseBody,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: FETCH_USERS_ERROR,
      message: err,
    })
  }
}
