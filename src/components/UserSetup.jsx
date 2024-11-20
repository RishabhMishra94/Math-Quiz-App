import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, setDifficulty, startQuiz } from '../features/quizSlice';

const UserSetup = () => {
  const [name, setName] = useState('');
  const [difficulty, setDifficultyLevel] = useState('easy');
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    if (name.trim()) {
      dispatch(setUserName(name));
      dispatch(setDifficulty(difficulty));
      dispatch(startQuiz());
    } else {
      alert('Please enter your name to  start the quiz.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32 ">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full ">
        <h1 className="text-center text-2xl font-semibold  text-gray-700 mb-6 font-weight: 800">Welcome to the Math Quiz</h1>

       
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 mb-4 w-full rounded-lg border border-gray-300 shadow-sm"
        />

      
        <select
          value={difficulty}
          onChange={(e) => setDifficultyLevel(e.target.value)}
          className="p-3 mb-6 w-full rounded-lg border border-gray-300 shadow-sm ">
        
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

    <button 
          onClick={handleStartQuiz}
          className="bg-blue-500 text-white font-bold p-3 rounded-lg w-full shadow-md">
         Start Quiz
        </button>
      </div>
    </div>
  );
};

export default UserSetup;
