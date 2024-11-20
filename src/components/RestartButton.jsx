import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startQuiz } from '../features/quizSlice';

const RestartButton = () => {
  const dispatch = useDispatch();
  const { isQuizCompleted } = useSelector((state) => state.quiz);

  if (!isQuizCompleted) return null;

  return (
    <div className="text-center my-5 ">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => dispatch(startQuiz())}>
         Restart Quiz
      </button>
    </div>
  );
};

export default RestartButton;

