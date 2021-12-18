import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/logo.png";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";



const LoginPage = ({login}) => {
  const [type, setType] = useState('password');


  const EyeChanger=()=>(
    type==='password'?<FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />
  )

const passwordVisibility=()=>{
  if(type==='password'){
    setType('text')
  }else{
    setType('password')
  }
}

  return (
    <div className="loginContainer">
      <div className="imgContainder">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1533836506892-a4c329362ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="background img"
        />
      </div>
      <div className="toplayer" />
      <div className="loginform">
        <div className="logoholder">
          <img src={image} alt="logo" className="logo" />
        </div>
        <div className="form">
          <div className="inputHolder">
            Email
            <div className="textInputContainer">
              <div className="inputIcons">
                <FontAwesomeIcon icon={faAt} />
                <input placeholder="Email" className="inputs" type='email'/>
              </div>
            </div>
          </div>
          <div className="inputHolder">
            Password
            <div className="textInputContainer">
              <div className="inputIcons">
                <FontAwesomeIcon icon={faLock} />
                <input placeholder="Password" className="inputs" type={type} />
                <button type="button" onClick={()=>passwordVisibility()} className="passwordbtn">
                  <EyeChanger/>
                </button>
              </div>
            </div>
          </div>
          <button className='signinbtn' onClick={()=>login()}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
