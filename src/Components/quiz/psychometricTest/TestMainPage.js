import React, { useState, useEffect } from 'react';
import './testStyle.css';
import logo from '../../../Assets/logo.png';
import useAuth from '../../Auth/UseAuth';  // Adjust the path according to your project structure

const TestMainPage = () => {
  const isAuthenticated = useAuth();  // Check authentication

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [learningTrack, setLearningTrack] = useState(null);

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const fetchAllQuestions = async () => {
    try {
      const response = await fetch('https://insignify-backend.onrender.com/questions');
      const data = await response.json();
      const shuffledQuestions = shuffleArray(data);
      setQuestions(shuffledQuestions);
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
    if (currentQuestionIndex < questions.length - 1) {
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
  };

  const handleSubmit = async () => {
    console.log('Collected responses:', selectedOptions);  // Log collected responses to console

    try {
      const response = await fetch('https://insignify-backend.onrender.com/submitResponses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses: selectedOptions }),
      });
      const data = await response.json();
      console.log('Response from server:', data);

      // Update the learning track based on the response from the server
      setLearningTrack(data.learningTrack);
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  if (!isAuthenticated) {
    return <p>Please log in to take the test.</p>;  // Optionally, you can return a loading spinner or a message
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex] || '';

  return (
    <div className="quiz-container">
      <div className="header">
        <img src={logo} style={{ width: 150, height: 35 }} alt="logo" />
        <h4><b>Section: All Questions</b></h4>
        <span>
          <b>59:49</b>
          <button>End Assessment</button>
        </span>
      </div>
      <div className='pagination'>
        {questions.map((question, index) => (
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
          <button className="btn btn-right" onClick={currentQuestionIndex < questions.length - 1 ? handleNext : handleSubmit}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
      {learningTrack && <p>Predicted Learning Track: {learningTrack}</p>}
    </div>
  );
};

export default TestMainPage;
