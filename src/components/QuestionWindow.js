import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import { TriviaContext } from '../common/TriviaObjects';
import Answer from '../trivia-elements/Answer';
import Timer from '../trivia-elements/Timer';
import './QuestionWindow.css'
import 'reactjs-popup/dist/index.css';

function QuestionWindow(props) {
    const { category, question, startQuestion, clickedAnswer, correctAnswer, score, toggleStartQuestion, updateClickedAnswer,
        updateCorrectAnswer } = useContext(TriviaContext);

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60); // 10 minutes timer 

    const updateState = () => {
        toggleStartQuestion();
        updateClickedAnswer(0);
        updateCorrectAnswer(0);
    }

    return (
        <Popup
            open={startQuestion}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={() => updateState()}>
                        &times;
                    </button>
                    {clickedAnswer === 0 ?
                        <div>
                            <Timer expiryTimestamp={time} />
                            <br />
                        </div> :
                        clickedAnswer === correctAnswer ?
                            <div>
                                <h1 className='correct' style={{ textAlign: 'center', color: 'green' }}> Correct! </h1>
                                <br />
                            </div> :
                            <div>
                                <h1 className='incorrect' style={{ textAlign: 'center', color: 'red' }}> Incorrect! </h1>
                                <br />
                            </div>
                    }
                    <div className="content">
                        <h1 style={{ color: category.color.text }}>{category.questions[question]}</h1>
                        <Answer answers={category.answers[question]} />
                    </div>
                    <br />
                    <div>
                        <h1 className={
                            score > 0 ? 'positive'
                                : score < 0 ? 'negative'
                                    : 'neutral'

                        }> Your score: {score} </h1>
                        <br />
                    </div>
                </div>
            )}
        </Popup>
    )

}

export default QuestionWindow;