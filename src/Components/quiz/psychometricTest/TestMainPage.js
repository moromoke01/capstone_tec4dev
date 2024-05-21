import React, { useState } from 'react';
import CognitiveQue from './CognitiveQue';
import PersonalityTrait from './PersonalityTrait';
import CreativityQue from './CreativityQue';
import Aptitude from './AptitudeQue';
import SkillQue from './SkillQue';
import useAuth from '../../Auth/UseAuth';   // Adjust the path according to your project structure

function TestMainPage() {
  const isAuthenticated = useAuth();  // Check authentication

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [responses, setResponses] = useState({});
  const [learningTrack, setLearningTrack] = useState(null);
  const totalQuestions = 5;

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleResponseChange = (questionNumber, response) => {
    setResponses({ ...responses, [questionNumber]: response });
  };

  const handleSubmit = async () => {
    try {
      // Send the responses to the server
      const response = await fetch('https://insignify-backend.onrender.com/submitResponses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses }),
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
    return null;  // Optionally, you can return a loading spinner or a message
  }

  return (
    <div className="testMainPage">
      {currentQuestion === 1 && <CognitiveQue onChange={(response) => handleResponseChange(1, response)} />}
      {currentQuestion === 2 && <PersonalityTrait onChange={(response) => handleResponseChange(2, response)} />}
      {currentQuestion === 3 && <CreativityQue onChange={(response) => handleResponseChange(3, response)} />}
      {currentQuestion === 4 && <Aptitude onChange={(response) => handleResponseChange(4, response)} />}
      {currentQuestion === 5 && <SkillQue onChange={(response) => handleResponseChange(5, response)} />}

      {currentQuestion < totalQuestions ? (
        <button className="nexted-section-btn" onClick={handleNext}>
          Next Section
        </button>
      ) : (
        <>
          <button className="nexted-section-btn" onClick={handleSubmit}>
            Submit
          </button>
          {learningTrack && <p>Predicted Learning Track: {learningTrack}</p>}
        </>
      )}
    </div>
  );
}

export default TestMainPage;
