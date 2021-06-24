import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaContext';
import 'reactjs-popup/dist/index.css';
import Answer from '../trivia-elements/Answer';
import Timer from '../trivia-elements/Timer';

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
                    <div>
                        <h1 style={{ textAlign: 'center' }}> Your score: {score} </h1>
                        <br />
                        <br />
                    </div>
                    {clickedAnswer === 0 ?
                        <div>
                            <Timer expiryTimestamp={time} />
                            <br />
                        </div> :
                        clickedAnswer === correctAnswer ?
                            <div>
                                <h1 style={{ textAlign: 'center', color: 'green' }}> Correct! </h1>
                                <br />
                            </div> :
                            <div>
                                <h1 style={{ textAlign: 'center', color: 'red' }}> Incorrect! </h1>
                                <br />
                            </div>
                    }
                    <div className="content">
                        <h1>{category.questions[question]}</h1>
                        <br />
                        <br />
                        <Answer answers={category.answers[question]} />
                    </div>
                </div>
            )}
        </Popup>
    )

}

export default QuestionWindow;