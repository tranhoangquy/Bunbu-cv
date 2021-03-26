import { data } from 'jquery'
import {
  PAGE_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_REQUEST,
  ADD_USER_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  PUT_USER_SUCCESS,
  PUT_USER_ERROR,
  SORT_USER_BY_ROLE,
  SORT_USER_BY_ROLE_ERROR,
  SEARCH_USER_SUCCESS,
} from '../constants/index'

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
}
const adminReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case PAGE_REQUEST:
      return {
        ...state,
        requesting: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        requesting: false,
        data: actions.users,
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: actions.message,
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
        data: [state.data, actions.data],
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: actions.message,
      }
    case DELETE_USER_SUCCESS:
      const filteredUsers = state.data.filter(
        (user) => user.id !== actions.payload.id
      )
      return {
        ...state,
        requesting: false,
        data: filteredUsers,
      }
    case DELETE_USER_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: actions.message,
      }
    case PUT_USER_SUCCESS:
      const timkiem = state.data.filter((e) => e.id !== actions.payload.id)
      return {
        ...state,
        requesting: false,
        data: [...timkiem, actions.data],
      }

    case PUT_USER_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: actions.message,
      }
    case SORT_USER_BY_ROLE:
      const sorted = _.orderBy(actions.data, ['type', 'role'], ['desc'])
      return {
        ...state,
        data: [...sorted],
      }
    case SORT_USER_BY_ROLE_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: actions.message,
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        valueSearch: actions.payload.valueSearch,
        data: actions.payload.items,
      }
    default:
      return state
  }
}
export default adminReducer
