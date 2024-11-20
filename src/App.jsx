import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import UserSetup from './components/UserSetup';
import QuestionDisplay from './components/QuestionDisplay';
import ScoreDisplay from './components/ScoreDisplay';
import RestartButton from './components/RestartButton';

const App = () => {
  const { userName } = useSelector((state) => state.quiz);

  return (
    <div>
      <Header />
      <div className="max-w-screen-sm mx-auto p-4">
        {!userName ? (
          <UserSetup />
        ) : (
          <>
            <QuestionDisplay />
            <ScoreDisplay />
            <RestartButton />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
