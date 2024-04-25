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
      const response = await fetch('http://localhost:5000/question/questions');
      const data = await response.json();
      
      // Filter questions by section
      const aptitudeQuestions = data.filter(question => question.section === "Aptitude");

      // Shuffle the array of questions
      const shuffledQuestions = shuffleArray(aptitudeQuestions);
      
      setAptitudeQuestions(shuffledQuestions);
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
      setSelectedOption(''); // Reset selected option when navigating to the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedOption(''); // Reset selected option when navigating to the previous question
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = () => {
    const selectedAnswer = selectedOption;
    // Handle user's answer selection
    // Compare selectedAnswer with correctAnswer to determine correctness
    // Update UI to reflect user's choice
  };

  const currentQuestion = aptitudeQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Aptitude Questions</h1>
      <div className="header">
        <img src={logo} style={{ width: 150 }} alt="logo" />
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
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${index}`}  className="options">{option}</label>
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
