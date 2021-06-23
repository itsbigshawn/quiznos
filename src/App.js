import React, { useState } from 'react';
import Trivia from './common/TriviaMain'
import './App.css';
import NestedGrid from './components/Grid';
import { TriviaContext } from './common/TriviaContext';

function App() {
  const [startQuestion, setStartQuestion] = useState(false);
  const toggleStartQuestion = () => setStartQuestion(!startQuestion)
  return (
    <div className="App">
      <TriviaContext.Provider
        value={{
          startQuestion,
          toggleStartQuestion,
        }}
      >
        <NestedGrid />
      </TriviaContext.Provider>
    </div>

  );
}

export default App;
