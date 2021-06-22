import React, { Component } from 'react';
import './TriviaMain.css';
import './TriviaContext'
import { MusicCategory, NatureCategory, ScienceCategory, SportsCategory } from './TriviaContext';

export default class Trivia extends Component {

    render() {
        return (
            <div className="Content">
                Hi from Trivia
            </div>
        );
    }

}