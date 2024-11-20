import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  difficulty: '',
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswer: '',
  isQuizCompleted: false,
  timer: 30, 
  timerRunning: false, 
};

const generateRandomQuestion = (difficulty) => {
    let num1, num2;
    if (difficulty === 'easy') {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
    }
     else if (difficulty === 'medium') {
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
    }
     else if (difficulty === 'hard') {
      num1 = Math.floor(Math.random() * 1000) + 1;
      num2 = Math.floor(Math.random() * 1000) + 1;
    }
    
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = eval(question).toFixed(2);  
  
    
     const range = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 100 : 1000;
     const correctAnswer = parseFloat(answer);
    
    
    const incorrectOption1 = (correctAnswer + Math.random() * range - range / 2).toFixed(2);
    const incorrectOption2 = (correctAnswer + Math.random() * range - range / 3).toFixed(2);
    const options = [correctAnswer, parseFloat(incorrectOption1), parseFloat(incorrectOption2)].sort(() => Math.random() - 0.5);
  
    return { question, answer: correctAnswer, options };

  };
  

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    startQuiz: (state) => {
      state.questions = Array.from({ length: 10 }, () => generateRandomQuestion(state.difficulty));
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.userAnswer = '';
      state.isQuizCompleted = false;
      state.timer = 30; 
      state.timerRunning = true; 
    },

    submitAnswer: (state, action) => {
      const { userAnswer } = action.payload;
      state.userAnswer = userAnswer;
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (parseFloat(userAnswer) === currentQuestion.answer) {
        state.score += 1;
      }
      else {
        state.score -= 1; 
      }
      
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
        state.userAnswer = '';
        state.timer = 30; 
      } else {
        state.isQuizCompleted = true;
        state.timerRunning = false; 
      }
    },
    restartQuiz: () => initialState,
    
    
    decrementTimer: (state) => {
      if (state.timerRunning && state.timer > 0) {
        state.timer -= 1;
      } else if (state.timer === 0) {
        
        state.timerRunning = false;
        
      }
    },

    resetTimer: (state) => {
      state.timer = 30; 
      state.timerRunning = false;
    },
    startTimer: (state) => {
      state.timerRunning = true; 
    },
    stopTimer: (state) => {
      state.timerRunning = false;
    },
  },
});

export const { 
  setUserName, 
  setDifficulty, 
  startQuiz, 
  submitAnswer, 
  restartQuiz,
  decrementTimer, 
  resetTimer,
  startTimer,
  stopTimer 
} = quizSlice.actions;

export default quizSlice.reducer;
