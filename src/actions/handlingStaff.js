import { PAGE_REQUEST,CREATE_CV_SUCCESS, CREATE_CV_ERROR} from "../constants"


export const creatCV =({valueCreateCv}) =>{
    return (dispatch) => {
        axios
          .post('/cvs', valueCreateCv)
          .then(dispatch({ type: PAGE_REQUEST }))
          .then((reponse) => {
            dispatch({
              type: CREATE_CV_SUCCESS,
              data: { ...reponse.data, ...valueCreateCv },
            })
          })
          .catch((error) => {
            dispatch({ type: CREATE_CV_ERROR, message: error })
          })
      }
}