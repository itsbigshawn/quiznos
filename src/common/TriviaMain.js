import React, { Component } from 'react';
import './TriviaMain.css';
import './Categories'
import { MusicCategory, NatureCategory, ScienceCategory, SportsCategory } from './Categories';

export default class Trivia extends Component {

    state = {
        questions: {
            'sports': SportsCategory.questions,
            'science': ScienceCategory.questions,
            'music': MusicCategory.questions,
            'nature': NatureCategory.questions
        },
        answers: {
            'sports': SportsCategory.answers,
            'science': ScienceCategory.answers,
            'music': MusicCategory.answers,
            'nature': NatureCategory.answers
        },
        correctAnswers: {
            'sports': SportsCategory.correctAnswers,
            'science': ScienceCategory.correctAnswers,
            'music': MusicCategory.correctAnswers,
            'nature': NatureCategory.correctAnswers
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        timer: 60,
        score: 0,
    }

    render() {
        return (
            <div className="Content">
                Hi from Trivia
            </div>
        );
    }

}