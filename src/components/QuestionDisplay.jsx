import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitAnswer } from '../features/quizSlice';

const QuestionDisplay = () => {
  const { questions, currentQuestionIndex, timer, isQuizCompleted } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  if (isQuizCompleted || questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    dispatch(submitAnswer({ userAnswer: option }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 mt-12 w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-slate-200 rounded-lg shadow-2xl">
    
      <h1 className="text-4xl font-bold text-center text-black-800 mb-6">
        Question
      </h1>
   <p className="text-3xl font-semibold text-center mb-12 text-gray-900 px-6 py-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg transform transition-all hover:scale-105">
        {currentQuestion.question}
      </p>

    <div className="flex justify-center items-center w-full mb-6">
        {!isQuizCompleted && (
          <p className="text-xl text-red-600 font-semibold">Time Remaining: {timer}s</p>
        )}
      </div>

    
      <div className="flex flex-col space-y-4 w-full ">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={timer === 0}
            className="bg-blue-300 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-lg">
          Option {index + 1}: {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;

