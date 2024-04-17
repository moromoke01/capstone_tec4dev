import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        const userId = data.userId;
        console.log(data);
        console.log(userId);
        if (data.message === 'Login successful') {
          localStorage.setItem("userId", data.userId);
          
          alert('Login successful');
          // history('/Home',{ state: { id: email, userId} });
         }else{
          alert('Invalid email or password');
         }
       })
       .catch((e)=>{
        console.log(e);
       })

       //Reset form fields
       setEmail('');
       setPassword('');

}

  return (
    <div className='body'>
      <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form>
      <div className="inputs">
        {/* {action === "Login" ? (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
            
          </div>
        ) : null} */}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" 
                 value={email}
                 onChange={handleEmailChange}
                 placeholder='Enter your email' required/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password"
                  value={password} 
                  onChange={handlePasswordChange}
                 placeholder='Enter your Password' required />
        </div>
        {/* <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Confirm Password' required />
        </div> */}
      </div>
      {action==="Sign Up"?<div></div>:      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
}
      <div className="submit-container">
        <div type="submit" key="login" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleSubmit}>Login</div>
        <div key="sign up" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} >Sign Up</div>
      </div>
      </form>
    </div>
    
    </div>
  );
};

export default Login;
