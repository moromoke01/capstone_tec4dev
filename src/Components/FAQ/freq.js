import React, { useState } from 'react';
import './freq.css'; // Assuming custom styles are defined in freq.css
import Arrow from '../../Assets/arrow.png';

function Question({ ques, answ }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnsw = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`p-5 border-b border-gray-300 mb-2 last:border-b-0 ${isOpen ? 'open-bg' : 'bg-white floating-shadow'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnsw}>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-relaxed">{ques}</h2>
        <span className={`text-xl transform transition-transform ${isOpen ? 'rotate-90' : ''}`}><img src={Arrow} alt="Faq Arrow" /></span>
      </div>
      {isOpen && <p className="mt-2">{answ}</p>}
    </div>
  );
}

function Freq() {
  return (
    <div className="max-w-7x2 mx-auto my-5 p-5">
      {/* <h1 className="text-3xl text-center mb-8 font-bold">Frequently Asked Questions</h1> */}
      <div className="grid grid-cols-3 gap-4">
        <Question
          ques="How can Insightify benefit me?"
          answ="
          Insightify helps individuals understand their strengths and areas for growth in the tech field through personalized assessments and learning paths. Its accurate career recommendations further assist users in advancing their tech careers confidently, empowering them to thrive in the Tech world."
        />
        <Question
          ques="Who can use Insightify?"
          answ="Insightify is designed for individuals of all backgrounds who are interested in the field of technology. Whether you're a seasoned tech professional looking to level up your skills or a newcomer eager to break into the industry, Insightify offers personalized assessments and guidance tailored to your unique goals and aspirations."
        />
        <Question
          ques="Is Insightify user-friendly?"
          answ="Yes, Insightify is designed to be user-friendly, catering to individuals at all stages of their tech journey. With personalized assessments, learning paths, and accurate career recommendations, Insightify provides a seamless experience for users to understand their strengths, identify areas for growth, and advance their tech careers with confidence."
        />
        <Question
          ques="Is my data secure on Insightify?"
          answ="Yes, your data is secure on Insightify. We uphold the highest standards of quality, integrity, and professionalism, ensuring the confidentiality and security of user information. Additionally, Insightify utilizes advanced encryption and security measures to safeguard user data and maintain privacy."
        />
        <Question
          ques="What types of tests does Insightify offer?"
          answ="Insightify provides a comprehensive suite of psychometric tests customized for tech skills, encompassing aptitude, cognitive abilities, creativity, personality traits, and skill assessments. These evaluations enable individuals to gain insights into their strengths, pinpoint areas for improvement, and optimize their potential within the technology sector."
        />
        <Question
          ques="How accurate are the results provided by Insightify?"
          answ="Insightify's results are highly accurate and reliable, utilizing advanced algorithms to analyze individual traits and provide personalized recommendations. By considering factors such as skills, experiences, and career goals, Insightify delivers precise insights tailored to each user's unique profile. Users can trust the platform to offer accurate assessments and valuable guidance for their tech career development."
        />
        <Question
          ques="Is there a test limit on Insightify?"
          answ="Yes, there is a limitation on the number of tests you can take within a specific timeframe. To maintain integrity and prevent users from manipulating the system, Insightify allows only one test every six months. This ensures that users engage genuinely with the assessments and receive accurate recommendations based on their genuine strengths and preferences."
        />
        <Question
          ques="Can I access Insightify on different devices?"
          answ="Yes, Insightify is accessible on desktops, laptops, tablets, and smartphones for convenience."
        />
        <Question
          ques="Can I export data from Insightify for further analysis?"
          answ="Yes, Insightify allows users to export data in various formats for further analysis and documentation."
        />
        <Question
          ques="Do I need to pay to access Insightify's tests?"
          answ="No, all tests on Insightify are completely free."
        />
        <Question
          ques="
          What's next after receiving my Insightify test results?"
          answ="After receiving your test results on Insightify, if you identify as female, you can choose to enroll in the Women Techster program or join the waitlist. If you identify as male, you can explore Tech4Dev opportunities from the menu bar."
        />
        <Question
          ques="How can I provide feedback on Insightify?"
          answ="You can provide feedback on Insightify through our feedback feature, located at the end of your assessment. Your insights help us improve our platform for a better user experience. Feel free to share your thoughts!"
        />
       
      </div>
    </div>
  );
}

export default Freq;
