import {
  PAGE_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  ADD_USER_REQUEST,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  PUT_USER_SUCCESS,
  PUT_USER_ERROR,
  SORT_USER_BY_ROLE,
  SORT_USER_BY_ROLE_ERROR,
  SEARCH_USER_SUCCESS,
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
export const addUser = ({ valuesForm }) => {
  return (dispatch) => {
    axios
      .post('/users', valuesForm)
      .then(dispatch({ type: ADD_USER_REQUEST }))
      .then((reponse) => {
        const user = reponse.data
        dispatch({
          type: ADD_USER_SUCCESS,
          data: { ...user, ...valuesForm },
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
export const updateUser = (id, valuesForm) => {
  return (dispatch) => {
    axios
      .put(`/users/${id}`, valuesForm)
      .then(dispatch({ type: PAGE_REQUEST }))

      .then((reponse) => {
        dispatch({
          type: PUT_USER_SUCCESS,
          payload: { id: id },
          data: { ...reponse.data, ...valuesForm },
        })
      })
      .catch((error) => {
        dispatch({ type: PUT_USER_ERROR, message: error })
      })
  }
}

export const sortUserByRole = (name) => {
  return (dispatch) => {
    axios
      .get('/users')
      .then((response) => {
        dispatch({
          type: SORT_USER_BY_ROLE,
          data: { ...response.data },
        })
      })
      .catch((error) => {
        dispatch({ type: SORT_USER_BY_ROLE_ERROR, message: error })
      })
  }
}
export const searchUser = (users, valueSearch) => {
  return (dispatch) => {
    axios
      .get('/users')
      .then(dispatch({ type: PAGE_REQUEST }))
      .then((reponse) => {
        dispatch({
          type: SEARCH_USER_SUCCESS,

          payload: {
            valueSearch: valueSearch,
            items:
              valueSearch === ''
                ? reponse.data
                : reponse.data.filter(
                    (x) =>
                      x['name']
                        .toLowerCase()
                        .indexOf(valueSearch.toLowerCase()) >= 0
                  ),
          },
        })
      })
  }
}
