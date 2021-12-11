import React, { useState,useEffect } from "react";
import {
  faTimes,
  faPencilAlt,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomTextInput = ({ ...props }) => {
  const { placeholder, edit, value, type, onChange } = props;

  const [enableEdit, setEnableEdit] = useState(edit);
  const [feildType, setFeildType] = useState(type);

  const changeEditMode = () => {
    setEnableEdit(!enableEdit);
  };
  const changeType = () => {
      if(feildType === "password" ){
        setFeildType('text')
      }else{
        setFeildType('password')
      }
  };

  const Eye = () => (
    <button className="eyebtn" onClick={() => changeType()} disabled={enableEdit}>
      {feildType === "password" ? (
        <FontAwesomeIcon icon={faEye} className="editCancel skyBlue" />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} className="editCancel skyBlue" />
      )}
    </button>
  );

  useEffect(()=>{

    if(enableEdit&&(placeholder === "Password" || placeholder === "Confirm Password")){
        setFeildType('password')
    }

  },[enableEdit])


  return (
    <div className="customInputContainer">
      <input
        placeholder={placeholder}
        disabled={enableEdit}
        value={value}
        type={feildType}
        onChange={(e) => onChange(e.target.value)}
      />
      {(placeholder === "Password" || placeholder === "Confirm Password") && (
        <Eye />
      )}
      <button className="editBtn" onClick={() => changeEditMode()}>
        {enableEdit ? (
          <FontAwesomeIcon icon={faPencilAlt} className="editCancel skyBlue" />
        ) : (
          <FontAwesomeIcon icon={faTimes} className="editCancel red" />
        )}
      </button>
    </div>
  );
};

export default CustomTextInput;
