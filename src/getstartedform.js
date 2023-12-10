import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: 'Question 1: What is your favorite color?',
    options: ['Red', 'Green', 'Blue'],
  },
  {
    id: 2,
    question: 'Question 2: Which animal do you like the most?',
    options: ['Dog', 'Cat', 'Fish'],
  },
  // Add more questions here
];

const QuestionForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerSubmit = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions are answered, you can perform any actions with the answers here.
      console.log('All answers:', answers);
    }
  };

  return (
    <div>
      <h1>Question Form</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={() => handleAnswerSubmit(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>All questions answered!</p>
          <Link to="/">Go back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
