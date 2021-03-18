import {
  PAGE_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  ADD_USER_REQUEST,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
} from '../constants/index.js'
import axios from './axios'

//-----------Action load danh sach User-------
export const loadUser = () => {
  return (dispatch) => {
    axios
      .get('/users')
      .then(dispatch({ type: PAGE_REQUEST }))
      .then((response) => {
        const user = response.data
        dispatch({ type: FETCH_USERS_SUCCESS, users: user })
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_ERROR, message: error })
      })
  }
}

//------------Add theme User----
export const addUser = ({ valuesform }) => {
  return (dispatch) => {
    axios
      .post('/users', valuesform)
      .then(dispatch({ type: ADD_USER_REQUEST }))
      .then((reponse) => {
        const user = reponse.data
        dispatch({
          type: ADD_USER_SUCCESS,
          data: { ...user, ...valuesform },
        })
      })
      .catch((error) => {
        dispatch({ type: ADD_USER_ERROR, message: error })
      })
  }
}

//---------delete user-----
export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`/users/${id}`)
      .then(dispatch({ type: PAGE_REQUEST }))
      .then((response) => {
        dispatch({ type: DELETE_USER_SUCCESS, payload: { id: id } })
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_ERROR,
          message: error,
        })
      })
  }
}
