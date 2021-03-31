import { CREATE_CV_ERROR, CREATE_CV_SUCCESS, FETCH_CV_ERROR, FETCH_CV_SUCESS, PAGE_REQUEST } from "../constants/index"
const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
  }

const staffReducer = (state= initialState, actions) =>{
	switch (actions.type){
		case PAGE_REQUEST:
			return {
			...state,
			requesting: true,
			}
		case CREATE_CV_SUCCESS:
			return{
					...state,
					requesting: false,
					data:actions.data
			}
		case CREATE_CV_ERROR:
			return{
					...state,
					requesting: false,
					success: false,
					message: actions.message,
			}
		case FETCH_CV_SUCESS:
			console.log(actions.data);

			return {
				...state,
				requesting:true,
				success:true,
				data:actions.data
			}
		case FETCH_CV_ERROR:
			return{
				...state,
					requesting: false,
					success: false,
					message: actions.message,
			}
			default:
				return state
	}
}
export default staffReducer
