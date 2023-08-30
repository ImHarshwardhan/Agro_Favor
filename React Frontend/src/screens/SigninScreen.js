import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/userActions'

import { useDispatch, useSelector } from 'react-redux'



const SigninScreen = (props) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response, role,id } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    localStorage.setItem('user',userSignin)
    if (role ==='ADMIN') {
      sessionStorage.setItem('token', id)
      props.history.push('/admin')
    }else if(role ==='CUSTOMER'){
      sessionStorage.setItem('token', id)
      props.history.push('/home')
    }else if(role ==='SUPPLIER'){
      localStorage.setItem('token', id)
      props.history.push('/supplier')
    }
     else if (response && response.status === 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response,role,id])
    return(
        <div className= "login-form">
            <Header title="Login" />
        <div className="form ">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
          
          <div className="float-end">
            New User? <Link to="/registration-customer" className="signup-color">Signup here</Link>
          </div>
        </div>
      </div>
    </div>
    )
}


export default SigninScreen