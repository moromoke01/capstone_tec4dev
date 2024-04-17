import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Verification.css';

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  
  const handleChange = (index, event) => {
    const newCode = [...verificationCode];
    newCode[index] = event.target.value;
    setVerificationCode(newCode);
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    // Implement verification logic here
    alert(`Verifying code: ${code}`);
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className="header">
          <div className="text">Verify Your Account</div>
          <div className="underline"></div>
        </div>
        <div className="verification-heading">
          <h4>Enter the 6-digit code sent to <br/>
             <br/> genesiseemmanuella@gmail.com</h4>
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

        <div className="already-have-account">
          <Link to="/signin">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
