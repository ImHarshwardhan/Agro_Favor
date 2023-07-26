import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from '../actions/userActions';
import Header from '../components/Header'

const ViewProfileScreen = (props) => {

  const  userSignin = useSelector((store) => store.userSignin);
  const {id} = userSignin;
  const [userId, setUserId] = useState(id)

  const  userProfile = useSelector((store) => store.userProfile);
  const {profileresponse} = userProfile;
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getProfile(userId));
  }, []);
  useEffect(() => {}, [profileresponse]);

  const onCancel = () => {
    props.history.push('/home')
  };
  const onEdit = () => {
    props.history.push('/edit_profile')
  };

  return (
    <div>
    <div className="border-font">
        {profileresponse &&
        <div>
      <Header title="My Profile"></Header>
      <h5>
        Name : {profileresponse.name}
      </h5>
      <h5>
       Email : {profileresponse.email}
      </h5>
      <h5>
       Password : {profileresponse.password}
      </h5>
      <h5>
       PhoneNo : {profileresponse.phone} 
      </h5>
      <h5>
       Order Address : {profileresponse.address}
      </h5>
      <h5>
       Pin Code : {profileresponse.pinCode}
      </h5>
      
      <button onClick={onEdit} className="btn btn-danger btn-border">
            Update Profile
          </button>
          <button onClick={onCancel} className="btn btn-primary btn-right btn-border">
            Back
          </button>
          </div>
          
    }
    </div>
    </div>
    
  );
};

export default ViewProfileScreen;
