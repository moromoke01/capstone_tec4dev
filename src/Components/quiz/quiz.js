import React, { useState, useEffect } from 'react';
import './quiz.css';
import quizData from './quizData';
import quizData1 from './quizData1'; 
import quizData2 from './quizData2';
import quizData3 from './quizData3';
import Navbar from './Navbar';

function Quiz() {
    const [quiz, setQuiz] = useState(quizData);
    const [displayQuestion, setDisplayQuestion] = useState(0);
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [amountCorrect, setAmountCorrect] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [result, setResult] = useState(0);
    const [clickable, setClickable] = useState(true);
    const [disableSubmission, setDisableSubmission] = useState(false); // Add state for disabling submission
    const [validationMessage, setValidationMessage] = useState(''); // Add state for validation message

    useEffect(() => {
        if (quiz && quiz.questions && quiz.questions.length > 0 && quiz.questions.length !== quiz.answers.length) {
            setDisableSubmission(true);
            setValidationMessage('Please make sure to answer all questions before submission.');
        } else {
            setDisableSubmission(false);
            setValidationMessage('');
        }
    }, [quiz]);

    const reset = () => {
        setDisplayQuestion(0);
        setDisplayAnswer(false);
        setAnswerCorrect(false);
        setAmountCorrect(0)
        setShowResults(false);
        setResult(0);
        setClickable(true);
    }

    const handleNextBtn = () => {
        if (displayQuestion < quiz.questions.length - 1) {
            setDisplayQuestion(displayQuestion + 1)
            setDisplayAnswer(false);
            setAnswerCorrect(false);
            setClickable(true);
        } else {
            moveToNextQuiz();
        }
    }

    const handleBackBtn = () => {
        if (displayQuestion >= 1) {
            setDisplayQuestion(displayQuestion - 1)
            setAnswerCorrect(false);
            setDisplayAnswer(false);
        }
    }

    const handleAnswer = (index) => {
        if (!clickable) {
            return; // Exit the function if an answer is already selected
        }
    
        if (quiz.questions[displayQuestion].correctAnswerIndex === index) {
            console.log('%cCorrect', `background-color: green`);
            setDisplayAnswer(!displayAnswer);
            setAnswerCorrect(true);
            setAmountCorrect(amountCorrect + 1);
            setClickable(false);
        } else {
            setDisplayAnswer(!displayAnswer);
            setClickable(false);
            console.log('%cWrong', `background-color: red`)
        }
    }

    const moveToNextQuiz = () => {
        if (quiz === quizData) {
            setQuiz(quizData1);
        } else if (quiz === quizData1) {
           setQuiz(quizData2);
        } else if (quiz === quizData2) {
            setQuiz(quizData3);
        } else {
            // All quizzes are done
            setShowResults(true);
            setResult((amountCorrect / quiz.questions.length) * 100);
        }
        reset();
    }

    return (
        <div>
            <Navbar/>
            <div className='quiz-container'>
                {!showResults ?
                    <>
                        <h2>Question (<span style={{ color: '#4cceac' }}>{displayQuestion + 1}</span> of {quiz.questions.length})</h2>
                        <div className='quiz-options'> 
                            <h2 className='question' dangerouslySetInnerHTML={{ __html: quiz.questions[displayQuestion].question }}></h2>
                            {quiz.questions[displayQuestion].answers.map((answer, index) => {
                                return (
                                    <button
                                        key={index}
                                        className='quiz-option-container'
                                        disabled={!clickable}
                                        onClick={() => handleAnswer(index)}
                                    >
                                        <div className="option-content">
                                            <h3
                                                style={displayAnswer && quiz.questions[displayQuestion].correctAnswerIndex === index
                                                    ? { color: '#4cceac' }
                                                    : displayAnswer && quiz.questions[displayQuestion].correctAnswerIndex !== index
                                                        ? { color: '#db4f4a' }
                                                        : null
                                                }
                                            >
                                                {answer}
                                            </h3>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                        {displayAnswer && answerCorrect
                            ? <h1 style={{ color: '#4cceac' }}>Correct!</h1>
                            : displayAnswer && !answerCorrect &&
                            <h1 style={{ color: '#db4f4a' }}>Wrong</h1>}
                        <div className='quiz-nav'>
                            <button onClick={handleBackBtn}><i className="fa-solid fa-arrow-left"></i>  Prev</button>
                            <button onClick={handleNextBtn} disabled={disableSubmission}>{disableSubmission ? "Answer All Questions" : "Next"}  <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        {validationMessage && <p style={{color: 'red'}}>{validationMessage}</p>} {/* Display validation message */}
                    </>
                    : 
                    <div className='results-container'>
                        <h1>Results</h1>
                        <div 
                            className='result-container' 
                            style={
                                result > 50 
                                ? {border: '3px solid #4cceac', boxShadow: '0 0 1rem #4cceac'}
                                : {border: '3px solid #db4f4a', boxShadow: '0 0 1rem #db4f4a'}
                            }
                        >
                        
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Quiz;
