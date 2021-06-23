import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaContext';
import 'reactjs-popup/dist/index.css';
import Answer from '../trivia-elements/Answer';

function QuestionWindow(props) {
    const { category, question, startQuestion, clickedAnswer, toggleStartQuestion, updateClickedAnswer,
        updateCorrectAnswer } = useContext(TriviaContext);

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
                    {
                        clickedAnswer === category.correctAnswers[question] ?
                            <div className="header">
                                Correct!
                            </div> :
                            clickedAnswer !== 0 ?
                                <div className="header">
                                    Incorrect!
                                </div> : ''
                    }

                    <div className="content">
                        <h1>{category.questions[question]}</h1>
                        <br />
                        <br />
                        <Answer answers={category.answers[question]} />
                    </div>
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            close modal
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )

}

export default QuestionWindow;