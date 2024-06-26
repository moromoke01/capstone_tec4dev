import React, { useState } from 'react';
import './Auth.css';
import logo from '../../Assets/Main_logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: { fullName: '', email: '', password: '', cpass: '' },
    step2: { gender: '', age: '', education: '', occupation: '', career: '', factor: '' }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentStepData = { ...formData[`step${step}`], [name]: value };
    setFormData({ ...formData, [`step${step}`]: currentStepData });
  };

  const handleSubmit = async () => {
    const userData = {
      fullName: formData.step1.fullName,
      email: formData.step1.email,
      password: formData.step1.password,
      gender: formData.step2.gender,
      age: formData.step2.age,
      education: formData.step2.education,
      occupation: formData.step2.occupation,
      career: formData.step2.career,
      factor: formData.step2.factor,
    };
    try {
      const response = await fetch('https://insignify-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        const userId = data.data.userId;
        alert("User successfully registered. Please check your email for the OTP.");
        console.log('User Account successfully created');
        navigate(`/VerificationPage?userId=${userId}&email=${formData.step1.email}`);
      } else {
        alert("Account creation failed");
        console.log("Account creation failed");
      }
    } catch (error) {
      alert("Failed to create account");
      console.log("Failed to create account", error);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="body">
      <div className="auth-cont flex flex-col md:flex-row">
        <div className="inputs-box md:w-1/2">
          <h2 className="auth-headline">
            <b>{step === 1 ? 'Create Account' : 'Continue your Registration'}</b>
          </h2>
          <p className="text-center text-black mb-5">
            {step === 1
              ? 'Yayyy? You made it to Insightify. Sign up to create your account and take your career psychometric Test'
              : 'To give you a more accurate result, we will love to know you better. Kindly complete your registration to start your assessment with Insightify'}
          </p>

          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-10 text-black mt-5">
              <div className="auth-input">
                <label className="block mb-2" style={{ color: '#9C13BE' }}>Full Name</label>
                <input type="text" name="fullName" value={formData.step1.fullName} onChange={handleChange}
                  placeholder='John Joe' required />
              </div>

              <div className="auth-input">
                <label style={{ color: '#9C13BE' }}>Email</label>
                <input type="text" className='w-full' name="email" value={formData.step1.email} onChange={handleChange} placeholder='johnjoe@example.com' required />
              </div>

              <div className="auth-input ">
                <label style={{ color: '#9C13BE' }}>Password</label>
                <input type="text" name="password" value={formData.step1.password} onChange={handleChange}
                  placeholder='********' required />
                <p className='text-red-500 text-base mt-3 font-bold'>At least 8 characters including special Characters</p>
              </div>

              <div className="auth-input">
                <label style={{ color: '#9C13BE' }}>Confirm Password</label>
                <input type="text" className='w-full' name="cpass" value={formData.step1.cpass} onChange={handleChange}
                  placeholder='********' />
                <p className='text-red-500 text-base mt-3 font-bold'>At least 8 characters including special Characters</p>
              </div>

              <div className='col-span-2 flex'>
                <p className="text-center text-black">
                  <input type="checkbox" value="" className='w-4 h-4 mr-4' />
                  I agree with Insightify's term and
                  service privacy policy and default notification settings, <Link to="/terms" className="redirect">Read Policy</Link>
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black mt-5">
              <div>
                <label>What is your gender?</label>
                <select name="gender" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none ' value={formData.step2.gender} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label>What is your age range?</label>
                <select name="age" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none' value={formData.step2.age} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option value="below 18">below 18 years</option>
                  <option value="20-25">18-25 years</option>
                  <option value="26-30">26-30 years</option>
                  <option value="31-40">31-40 years</option>
                  <option value="30-above">30 years-above</option>
                </select>
              </div>

              <div>
                <label>What is your highest qualification?</label>
                <select name="education" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none' value={formData.step2.education} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option value="undergraduate">undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="post-graduate">Post-graduate</option>
                </select>
              </div>

              <div>
                <label>What is your occupation status?</label>
                <select name="occupation" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none' value={formData.step2.occupation} onChange={handleChange}>
                  <option value=""> Select one</option>
                  <option value="unemployed">unemployed</option>
                  <option value="employed">employed</option>
                  <option value="self-employed">self-employed</option>
                </select>
              </div>

              <div>
                <label>Which of these tech career path interest you?</label>
                <select name="career" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none' value={formData.step2.career} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option value="frontend development">frontend development</option>
                  <option value="backend development">backend development</option>
                  <option value="Product management">Product management</option>
                  <option value="Product Design">Product Design</option>
                  <option value="3D Animation-Modeling">3D Animation-Modeling</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Mobile development">Mobile development</option>
                </select>
              </div>

              <div>
                <label>What factor influences your career choice in Tech?</label>
                <select name="factor" className='w-full border-b-2 border-purple-600 py-3 px-4 pr-8 rounded-t leading tight focus:outline-none' value={formData.step2.factor} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option value="upskilling">upskilling</option>
                  <option value="personal interest">personal interest</option>
                  <option value="Job security">Job security</option>
                  <option value="Career transition">Career transition</option>
                </select>
              </div>
            </div>
          )}

          <button className='submit-btn m-auto mt-5 mb-10 focus:outline-none' onClick={handleNext}>{step < 2 ? 'Next' : 'Submit'}</button>

          <p className='hide-on-desktop'>Already have an account with Insightify? <span className="redirect"><Link to="/Login">SignIn</Link></span></p>
        </div>
        <div className="info-bar-right md:w-1/2">
          <div className="logoAndTagline" style={{ marginTop: '50px' }}>
            <img src={logo} style={{ width: 150 }} alt="logo" />
          </div>
          <div className="auth-info-body">
            <h3>We are glad you are back. Welcome!</h3>
            <p className='text-white'>Already have an account with Insightify? Stay connected with us and log in here</p>
            <button className="auth-btn-1"><Link to="/Login">SIGN IN</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}
