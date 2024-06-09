import React, { useState, useEffect } from 'react';
import './testStyle.css';
import logo from '../../../Assets/logo.png';

const SkillsAndInterest = ({ onUpdateResponse }) => {
  const [skillsAndInterestQuestions, setSkillsAndInterestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    fetchSkillsAndInterestQuestions();
  }, []);


  const fetchSkillsAndInterestQuestions = async () => {
    try {
      const response = await fetch('https://insignify-backend.onrender.com/questions');
      const data = await response.json();
      const skillsAndInterestQuestions = data.filter(question => question.section === "Skills and Interests");
      const shuffledQuestions = shuffleArray(skillsAndInterestQuestions);
      setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
      setSkillsAndInterestQuestions(shuffledQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNext = () => {
    if (currentQuestionIndex < skillsAndInterestQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleOptionChange = (event) => {
    const newSelectedOptions = { ...selectedOptions };
    newSelectedOptions[currentQuestionIndex] = event.target.value;
    setSelectedOptions(newSelectedOptions);
    const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnsweredQuestions);
  };

  const currentQuestion = skillsAndInterestQuestions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex] || '';

  return (
    <div className="quiz-container">
      <div className="header">
        <img src={logo} style={{ width: 150, height:35 }} alt="logo" />
        <h4><b>Section E: Skills and Interest Questions</b></h4>
        <span>
          <b>59:49</b>
          <button>End Assessment</button>
        </span>
      </div>
      <div className='pagination'>
        {skillsAndInterestQuestions.map((question, index) => (
          <div
            key={index}
            className={`pagination-circle ${answeredQuestions[index] ? 'answered' : 'unanswered'}`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="questions">
        {currentQuestion && (
          <div className="question">
            <h4>{currentQuestionIndex + 1}. {currentQuestion.question}</h4>
            <form>
              {currentQuestion.options.map((option, index) => (
                <p key={index}>
                  <div className="que-options">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                    />
                    <div><label htmlFor={`option-${index}`} className="options"><p>{option}</p></label></div>
                  </div>
                </p>
              ))}
            </form>
          </div>
        )}
        <div className="bottom-buttons">
          <button className="btn btn-left" onClick={handlePrevious}>Previous</button>
          <button className="btn btn-right" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndInterest;
