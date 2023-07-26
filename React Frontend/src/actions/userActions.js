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
import axios from 'axios'

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/login'
  }
}

export const signup = (name, email, password,address,pinCode,phone) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      name,
      email,
      password,
      address,
      pinCode,
      phone,
    }
    const url = 'http://localhost:8080/user/register_customer'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch({
      type: USER_PROFILE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const url = 'http://localhost:8080/user/profile/'+userId
    axios
      .post(url,header)
      .then((response) => {
        dispatch({
          type: USER_PROFILE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}


export const updateProfile = (id,name, email, password,address,pinCode,phone,role) => {
  return (dispatch) => {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    alert('in update action')
    const body = {
      id,
      name,
      email,
      password,
      address,
      pinCode,
      phone,
      role,
    }
    const url = 'http://localhost:8080/user/update'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = 'http://localhost:8080/user/login'
    axios
      .post(url, body,header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}


export const signupSupplier = (name, email, password,address,pinCode,phone) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      name,
      email,
      password,
      address,
      pinCode,
      phone,
    }
    const url = 'http://localhost:8080/admin/register_supplier'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}
