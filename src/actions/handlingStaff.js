import { PAGE_REQUEST,CREATE_CV_SUCCESS, CREATE_CV_ERROR, FETCH_CV_SUCESS, FETCH_CV_ERROR} from "../constants"
import axios from "./axios"


export const creatCV =({valueCreateCv,avatarCv}) =>{
  return (dispatch) => {
    axios
      .post('/cvs', {valueCreateCv,avatarCv})
      .then(dispatch({ type: PAGE_REQUEST }))
      .then((reponse) => {
        dispatch({
          type: CREATE_CV_SUCCESS,
          data: { ...reponse.data, ...valueCreateCv,...avatarCv },
        })
      })
      .catch((error) => {
        dispatch({ type: CREATE_CV_ERROR, message: error })
      })
  }
}

export const fetchCV = ()=>{
  return (dispatch)=>{
    axios
      .get('/cvs')
      .then(dispatch({type:PAGE_REQUEST}))
      .then((response)=>{
        dispatch({

          type:FETCH_CV_SUCESS,
          data:{...response.data}
        })
        .catch((error)=>{
          dispatch({type:FETCH_CV_ERROR,
          maessage:error})
        })
      })
  }
}