import React, { useState } from 'react';
import './App.css';
import NestedGrid from './components/Grid';
import { TriviaContext } from './common/TriviaContext';

function App() {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(0);
  const [startQuestion, setStartQuestion] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);

  const updateCategory = (categoryItem) => setCategory(categoryItem);
  const updateQuestion = (index) => setQuestion(index);
  const toggleStartQuestion = () => setStartQuestion(!startQuestion);
  const updateClickedAnswer = (clickedAnswer) => setClickedAnswer(clickedAnswer);
  const updateCorrectAnswer = (correctAnswer) => setCorrectAnswer(correctAnswer);
  const updateScore = (points) => setScore(score + points);

  return (
    <div className="App">
      <TriviaContext.Provider
        value={{
          category,
          question,
          startQuestion,
          clickedAnswer,
          correctAnswer,
          timer,
          score,
          updateCategory,
          updateQuestion,
          toggleStartQuestion,
          updateClickedAnswer,
          updateCorrectAnswer,
          updateScore,
        }}
      >
        <NestedGrid />
      </TriviaContext.Provider>
    </div>

  );
}

export default App;
