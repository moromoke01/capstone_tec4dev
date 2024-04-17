import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");

  const [ FormData, setFormData] = useState({
     fname: "", lname: "", gender: "", education: "",location: "", age: "",email: "", password: ""
  })

  function handleData(e){
    setFormData(prevDataForm =>{
      return{
        ...prevDataForm,
        [e.target.name]:e.target.value
      }
    })
  }


  const handleSubmit = async(event)=>{
      event.preventDefault();
      try{
        const SentData ={
          fname: FormData.fname,
          lname: FormData.lname,
          gender: FormData.gender,
          location: FormData.location,
          education: FormData.education,
          age: FormData.age,
          email: FormData.email,
          password: FormData.password
        };

        console.log("Firstname:", FormData.fname);
        console.log("LastName:", FormData.lname)
        console.log("email:", FormData.email)
        console.log("password:", FormData.password)
  

        console.log(SentData);

        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(SentData)
        });
       
        if(response.ok){
          const data = await response.json();
          console.log(data.message);

          alert("User successfully registered");
          window.location.href ="./Login"
        }else{
          //if sign-up failed
        const error = await response.json();
        console.log(error.message);

        alert("Sign-up failed")
        }
      }catch(e){
        console.log(e);
      }

      // Reset form fields
     setFormData({
      fname: '', // Reset to an empty string
      lname: '',
      gender: '',
      location: '',
      education: '',
      age: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className='body'>
      <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form >
      <div className="inputs">

        <div className="input">
        <img src={user_icon} alt="" />
          <input type="text"
                 name="fname"
                 value={FormData.fname}
                 onChange={handleData} 
                 placeholder='First Name' />
        </div>

        <div className="input">
        <img src={user_icon} alt="" />
          <input type="text" 
                 name="lname"
                 value={FormData.lname}
                 onChange={handleData} 
                placeholder='Last Name' />
        </div>

        <div className="input">
          <input type="text" 
                name="gender"
                value={FormData.gender}
                onChange={handleData} 
                 placeholder='Gender' />
        </div>

        <div className="input">
          <input type="text"
                 name="location"
                 value={FormData.location}
                 onChange={handleData}  
                placeholder='location' />
        </div>

        <div className="input">
          <input type="text" 
                 name="education"
                 value={FormData.education}
                 onChange={handleData} 
                 placeholder='Level of Education' />
        </div>

        <div className="input">
          <input type="date"
                 name="age"
                 value={FormData.age}
                 onChange={handleData} 
                 placeholder='Age' />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" 
                  name="email"
                  value={FormData.email}
                  onChange={handleData} 
                  placeholder='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" 
                  name="password"
                  value={FormData.password}
                  onChange={handleData} 
                  placeholder='Password' required />
        </div>
        {/* <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Confirm Password' required />
        </div> */}
      </div>
      {action==="Sign Up"?<div></div>:      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
}
      <div className="submit-container">
        <div key="login" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        <div type="submit" key="sign up" className={action === "Login" ? "submit gray" : "submit"} onClick={handleSubmit}>Sign Up</div>
      </div>
      </form>
    </div>
    
    </div>
    
  );
};


export default Signup;
