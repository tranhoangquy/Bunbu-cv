import { PAGE_REQUEST,CREATE_CV_SUCCESS, CREATE_CV_ERROR} from "../constants"
import axios from './axios'

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
