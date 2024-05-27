import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Verification.css';
import emailImage from "../../Assets/email.png";

const VerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');
  const emailFromQuery = queryParams.get('email');

  const [email, setEmail] = useState(emailFromQuery || '');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [emailFromQuery]);

  const handleChange = (index, event) => {
    const newCode = [...verificationCode];
    newCode[index] = event.target.value;
    setVerificationCode(newCode);
  };

  const handleVerify = async () => {
    const otp = verificationCode.join('');
    const response = await fetch('https://insignify-backend.onrender.com/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, userId }),
    });
    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      navigate('/Login');
    }
  };

  return (
    <div className='body'> 
      <div className='cont flex'>
        <div className='email-image'>
          <img src={emailImage} alt="email-logo"/>
          <div className='circled-number'>  </div>
        </div>

        <div className='verify-content'>
          <div className="verify-header">
            <h2 className='v-text'>Verify Your Account </h2>
            <p className='text-center'>
              A mail containing a 6-digit code has been sent to your email address. 
              Check your email and input the code here to verify your account to continue.
            </p>
          </div>
          
          {/* Email input */}
          <div className="email-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          {/* Verification code boxes */}
          <div className="verification-code">
            {verificationCode.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(index, e)}
              />
            ))}
          </div>

          {/* Verify button */}
          <div className="submit-container">
            <button className="submit" onClick={handleVerify}>VERIFY</button>
          </div>
          
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
