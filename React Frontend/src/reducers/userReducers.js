import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,
  USER_PROFILE_FAIL,USER_PROFILE_REQUEST,USER_PROFILE_SUCCESS
} from '../constants/userConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload,
              isSignupSuccess : action.payload.role}
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }
    case USER_UPDATE_SUCCESS:
      return { loading: false, response2: action.payload,
              isupdateSuccess : action.payload.role}
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true }
    case USER_PROFILE_SUCCESS:
      return { loading: false, 
        profileresponse: action.payload,
        id : action.payload.id,
        name : action.payload.name,
        email : action.payload.email,
        password : action.payload.password,
        address : action.payload.address,
        phone : action.payload.phone,
        role : action.payload.role,
        pinCode : action.payload.pinCode,
        islogin : true}
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, 
        response: action.payload,
        id : action.payload.id,
        name : action.payload.name,
        email : action.payload.email,
        password : action.payload.password,
        address : action.payload.address,
        phone : action.payload.phone,
        role : action.payload.role,
        pinCode : action.payload.pinCode,
        islogin : true}
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}
