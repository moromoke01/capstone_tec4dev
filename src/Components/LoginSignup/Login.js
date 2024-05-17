import React, { useState, useEffect } from 'react';
import './Auth.css';
import logo from '../../Assets/Main_logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://insignify-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Log the response from the server

      if (response.ok && data.message === 'Login successful') {
        // const { userId, fullName, token } = data;
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);

        alert('Login successful');

        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert('An error occurred during login. Please try again.');
    }

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  // useEffect(() => {
  //   // Check if the user is already logged in
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // Redirect to the homepage if the user is already logged in
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <div className="body">
      <div className="auth-cont-1">
        <div className="info-bar">
          <div className="logoAndTagline">
            <img src={logo} style={{ width: 150 }} alt="logo" />
            <p className='text-white'>...the best online career compass</p>
          </div>

          <div className="auth-info-body">
            <h3 className='text-white'>You are here, Welcome to Insightify!</h3>
            <p className='text-white'>
              Are you new here? Sign up to create an account with Insightify
            </p>

            <button className="auth-btn-1">
              <Link to="/signup">SIGN UP</Link>
            </button>
          </div>
        </div>

        <div className="inputs-box">
          <form>
            <h2 className="login-headline ">
              <b> Continue with Insightify </b>
            </h2>
            <p className="text-center text-black">
              Already have an account with us? Sign in to stay connected with
              us and continue to explore
            </p>

            <div className="auth-input mt-10">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="johnjoe@example.com"
                required
              />
            </div>

            <div className="auth-input mt-20">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="..........."
                required
              />
            </div>

            <div className="forgot-pwd text-right mt-7 font-semibold">
              Forgot Password?
            </div>

            <div className="submit-container">
              <div
                type="submit"
                key="login"
                className="submit-btn mt-5"
                onClick={handleSubmit}
              >
                SIGN IN
              </div>

              <p className="hide-on-desktop">No Account yet? <span><Link to="/signup">Signup</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
