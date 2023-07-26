import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen =(props)=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()

    const userSignup = useSelector((store) => store.userSignup)
    const { loading, response, error,isSignupSuccess } = userSignup
    const onSignup = () => {
        dispatch(signup(name, email, password,address,pinCode,phone))
      }
    useEffect(() => {
        console.log('use effect called: ')
        console.log('loading: ', loading)
        console.log('response: ', response)
        console.log('error: ', error)
        console.log(isSignupSuccess)
        if (isSignupSuccess === 'CUSTOMER') {
          props.history.push('/login')
        } else if (error) {
          console.log(error)
          alert('error while making API call')
        }
      }, [loading, response, error,isSignupSuccess])
      
    return(

        <div className="container signup-form">
            <div className="form">


                <h2 >  Register User </h2>

                <div className="form-group">
                    <strong className="col-sm-3 control-label">Name</strong>
                    <div className="col-sm-9">
                        <input 
                             onChange={(e) => {
                                setName(e.target.value)
                              }}
                              type="text" placeholder="Name" className="form-control"  />
                    </div>
                </div>
                <div className="form-group">
                    <strong className="col-sm-3 control-label">Email </strong>
                    <div className="col-sm-9">
                        <input onChange={(e) => {
                                setEmail(e.target.value)
                              }}
                              type="email" placeholder="Email" className="form-control" name= ""/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Password</strong>
                    <div className="col-sm-9">
                        <input onChange={(e) => {
                                setPassword(e.target.value)
                                }}
                                type="text" placeholder="Password" className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <strong className="col-sm-3 control-label">Address</strong>
                    <div className="col-sm-9">
                        <input onChange={(e) => {
                                setAddress(e.target.value)
                                }}
                                type="text" placeholder="Address" className="form-control"/>
                    </div>
                </div>


                <div className="form-group">
                    <strong className="col-sm-3 control-label">Pin Code</strong>
                    <div className="col-sm-9">
                        <input onChange={(e) => {
                                    setPinCode(e.target.value)
                                }}
                                type="text" placeholder="pincode" className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <strong className="col-sm-3 control-label">Phone </strong>
                    <div className="col-sm-9">
                        <input onChange={(e) => {
                                    setPhone(e.target.value)
                                }}
                                type="phoneNumber" placeholder="Phone number" className="form-control"/>
                        <span className="help-block">Your phone number won't be disclosed anywhere </span>
                    </div>
                </div>

                <div className="form-group signup-button">
                    <div className="row">
                        <div className="col-sm-3">
                        <button onClick={onSignup} className="btn btn-primary btn-block">Register</button>
                        </div>

                        <div className="col-sm-6">
                        <Link to="/login">
                        <button className="btn btn-success ">Back to login</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
)}

export default SignupScreen
