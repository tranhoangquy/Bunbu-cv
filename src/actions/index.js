import * as types from '../Const/index'
export const changeEmail = (email) => {
    return {
        type: types.CHANGEEMAIL,
        email: email,
    }
}
export const changePassword = (password) => {
    return {
        type: types.CHANGEPASSWORD,
        password: password,
    }
}

export const sendEmail = (email) => {
    return {
        type: types.SENDEMAIL,
        email: email,
    }
}
export const checkPasswordConfirm = (password) => {
    return {
        type: types.CHANGEPASSAFLOGFIRM,
        password: password,
    }
}
export const checkPasswordCurrent = (password) => {
    return {
        type: types.CHECKPASSWORDCURRENT,
        password: password,
    }
}
export const changeSearchUser = (search) => {
    return {
        type: types.CHANGESEARCHUSER,
        search: search,
    }
}
export const changeSearchCv = (search) => {
    return {
        type: types.CHANGESEARCHCV,
        search: search,
    }
}

export const changeRolelogin = (role) => {
    return {
        type: types.CHANGEROLELOGIN,
        role: role,
    }
}
export const changeUsername = (username) => {
    return {
        type: types.CHANGEUSERNAME,
        username: username,
    }
}
export const loginUser = (userObj) => {
    return {
        type: types.LOGIN_USER,
        payload: userObj,
    }
}

