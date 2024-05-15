import React, { useState, useEffect } from 'react';
import logo from '../../../Assets/logo.png'
import "./testStyle.css";

const AptitudeQuestion = () => {
  const [aptitudeQuestions, setAptitudeQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend
    fetchAptitudeQuestions();
  }, []);

  const fetchAptitudeQuestions = async () => {
    try {
      // Simulate fetching data from a URL
      const response = await fetch('https://insignify-backend.onrender.com/questions');
      const data = await response.json();
      
      // Filter questions by section
      const aptitudeQuestions = data.filter(question => question.section === "Aptitude");

      // Shuffle the array of questions
      const shuffledQuestions = shuffleArray(aptitudeQuestions);
      
      setAptitudeQuestions(shuffledQuestions);
      // Initialize answeredQuestions array with false for each question
      setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNext = () => {
    if (currentQuestionIndex < aptitudeQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleOptionChange = (event) => {
    const selectedIndex = event.target.id.split('-')[1];
    setSelectedOption(event.target.value);
    // Update answeredQuestions array to mark current question as answered
    const updatedAnsweredQuestions = answeredQuestions.map((answer, index) => {
      return index === parseInt(selectedIndex) ? true : answer;
    });
    setAnsweredQuestions(updatedAnsweredQuestions);
  };

  const currentQuestion = aptitudeQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      
      <div className="header">
        <img src={logo} style={{ width: 130 }} alt="logo" />
        <h4>
          <b>Section D: Aptitude Questions</b>
        </h4>

        <span>
          <b>59:49</b>
          <button>End Assessment</button>
        </span>
      </div>

      <div className='pagination'>
        {aptitudeQuestions.map((question, index) => (
          <div
            key={index}
            className={`pagination-circle ${answeredQuestions[index] ? 'answered' : 'unanswered'}`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      
      <div className="question">
        <h4>{currentQuestionIndex + 1}. {currentQuestion && currentQuestion.question}</h4>
        <form>
          {currentQuestion && currentQuestion.options.map((option, index) => (
            <div className="options" key={index}>
              <ul>
                <li>
              <input
                type="radio"
                id={`option-${index}`}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <div><label htmlFor={`option-${index}`} className="options-text" >{option}</label></div>

                </li>
              </ul>
            </div>
          ))}
        </form>
      </div>

      <div className="bottom-buttons">
        <button className="btn btn-left" onClick={handlePrevious}>Previous</button>
        <button className="btn btn-right" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default AptitudeQuestion;
