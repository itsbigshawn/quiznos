import React, { useContext } from 'react';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaContext';
import './Answer.css';

function Answer(props) {
    const { category, question, clickedAnswer, correctAnswer, updateClickedAnswer, updateCorrectAnswer } = useContext(TriviaContext);

    const checkAnswer = (clicked) => {
        if (clicked === category.correctAnswers[question]) {
            updateCorrectAnswer(category.correctAnswers[question]);
            updateClickedAnswer(clicked);
            console.log("Correct!")
        }
        else {
            updateCorrectAnswer(0);
            updateClickedAnswer(clicked);
            console.log("Incorrect!")
        }
    }

    let answer = Object.keys(props.answers)
        .map((qAnswer, i) => (
            <li
                className={
                    correctAnswer === qAnswer ?
                        'correct' :
                        clickedAnswer === qAnswer ?
                            'incorrect' : ''
                }
                onClick={() => checkAnswer(qAnswer)}
                key={qAnswer} >
                {props.answers[qAnswer]}
            </li >
        ));

    return (
        <ul className='Answers'>
            {answer}
        </ul>
    );

}


export default Answer;    