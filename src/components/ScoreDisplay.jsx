  import React from 'react';
import { useSelector } from 'react-redux';

const ScoreDisplay = () => {
  const { score, isQuizCompleted } = useSelector((state) => state.quiz);

  return (
    <div className="text-center  flex justify-center  p-4 w-full bg-red-400 mt-8 ">
      <p className="text-lg font-semibold font-weight: 900  ">
        {isQuizCompleted ? `Final Score: ${score}/10` : `Current Score: ${score}`}
      </p>
    </div>
  );
};

export default ScoreDisplay;
