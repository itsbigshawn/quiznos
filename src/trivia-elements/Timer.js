import React, { useContext } from 'react';
import { TriviaContext } from '../common/TriviaContext';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
    const { category, question, updateScore, toggleStartQuestion } = useContext(TriviaContext);

    const closeWindow = () => {
        toggleStartQuestion();
        updateScore(-category.scores[question]);
        // restart(expiryTimestamp);
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
      <div style={{textAlign: 'center'}}>
        <h1> You have </h1>
        <div style={{fontSize: '50px'}}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <h1> seconds remaining </h1>
      </div>
    );
  }
  
  export default Timer;