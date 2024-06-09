import React, { useState, useEffect } from 'react';
import logo from '../../../Assets/logo.png';
import "./testStyle.css";

const CreativityQues = ({ onUpdateResponse }) => {
  const [creativityQuestions, setCreativityQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    fetchCreativityQuestions();
  }, []);

  const fetchCreativityQuestions = async () => {
    try {
      const response = await fetch('https://insignify-backend.onrender.com/questions');
      const data = await response.json();
      const creativityQuestions = data.filter(question => question.section === "Creativity");
      const shuffledQuestions = shuffleArray(creativityQuestions);
      setCreativityQuestions(shuffledQuestions);
      setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
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
    if (currentQuestionIndex < creativityQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleOptionChange = (event) => {
    const selectedIndex = currentQuestionIndex;
    const selectedOption = event.target.value;
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [selectedIndex]: selectedOption
    }));
    const updatedAnsweredQuestions = answeredQuestions.map((answer, index) => index === selectedIndex ? true : answer);
    setAnsweredQuestions(updatedAnsweredQuestions);
    onUpdateResponse(selectedIndex, selectedOption);
  };

  const currentQuestion = creativityQuestions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex] || '';

  return (
    <div className="quiz-container">
      <div className="header">
        <img src={logo} style={{ width: 150, height:35 }} alt="logo" />
        <h4><b>Section B: Creativity Questions</b></h4>
        <span><b>59:49</b><button>End Assessment</button></span>
      </div>

      <div className='pagination'>
        {creativityQuestions.map((question, index) => (
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
                <p key={index} className="que-options">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`} className="options">{option}</label>
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

export default CreativityQues;
