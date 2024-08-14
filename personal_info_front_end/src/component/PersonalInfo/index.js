import { React, useState, useEffect } from "react";
import "./personalInfo.css";
function PersonalInfo({setPersonalInfoHasErrors, setPersonalInfo, personalInfo}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if(name && email && phone){
      setPersonalInfoHasErrors(false)
    }
  }, [name, email, phone])
  const validateAndSetName = (e) => {
    const value = e.target.value;
    setName(value);
    if(!value){
      document.getElementById("fnameError").style.display='block'
    }else{
      document.getElementById("fnameError").style.display='none'
    }
    setPersonalInfo({
      ...personalInfo,
      name
    })
  }
  const validateAndSetEmail = (e) => {
    const value = e.target.value;
    setEmail(e.target.value);
    if(!value){
      document.getElementById("emailError").style.display='block'
    }else{
      document.getElementById("emailError").style.display='none'
    }
    setPersonalInfo({
      ...personalInfo,
      email
    })
  }
  const validateAndSetPhone = (e) => {
    const value = e.target.value;
    setPhone(e.target.value);
    if(!value){
      document.getElementById("phoneError").style.display='block'
    }else{
      document.getElementById("phoneError").style.display='none'
    }
    setPersonalInfo({
      ...personalInfo,
      phone
    })
  }

  return (
    <div className="personalInfo">
      <form>
        <div className="formField">
          <lable for="fname">Name</lable>
          <br></br>
          <input
            type="text"
            value={name}
            id="fname"
            name="fname"
            onChange={validateAndSetName}
            onBlur={validateAndSetName}
          />
          <span id="fnameError" className="error">
            Name is required
          </span>
        </div>
        <div className="formField">
          <lable for="emailId">Email Address</lable>
          <br />
          <input
            type="text"
            value={email}
            id="emailId"
            name="emailId"
            onChange={validateAndSetEmail}
            onBlur={validateAndSetEmail}
          />
          <span id="emailError" className="error">
            Email-Address is required
          </span>
        </div>
        <div className="formField">
          <lable for="phone">Phone Number</lable>
          <br />
          <input
            type="text"
            value={phone}
            id="phone"
            name="phone"
            placeholder="+1 234 567 890"
            onChange={validateAndSetPhone}
            onBlur={validateAndSetPhone}
          />
          <span id="phoneError" className="error">
            Phone Number is required
          </span>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
