import React, { useContext } from 'react';
import { TriviaContext } from '../common/TriviaObjects';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
  const { category, question, updateScore, toggleStartQuestion } = useContext(TriviaContext);

  const closeWindow = () => {
    toggleStartQuestion();
    updateScore(-category.scores[question]);
  }

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => closeWindow() });


  return (
    <div style={{ textAlign: 'center' }}>
      <h2> You have </h2>
      <div style={{ fontSize: '40px', color: 'red' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <h2> seconds remaining </h2>
    </div>
  );
}

export default Timer;