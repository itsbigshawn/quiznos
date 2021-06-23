import React, { Component, createContext } from 'react';

export const SportsCategory = {
    questions: {
        1: "What's the diameter of a basketball hoop in inches?",
        2: "How big is an Olympic sized swimming pool in metres?",
        3: "In professional basketball, how high is the basketball hoop from the ground?",
        4: "The Summer Olympics are held every how many years?"
    },
    answers: {
        1: {
            1: "14 inches",
            2: "16 inches",
            3: "18 inches"
        },
        2: {
            1: "50m x 30m",
            2: "50m x 25m",
            3: "60m x 30m"
        },
        3: {
            1: "10ft",
            2: "11ft",
            3: "12ft"
        },
        4: {
            1: "2 years",
            2: "4 years",
            3: "6 years"
        },
    },
    correctAnswers: {
        1: '3',
        2: '2',
        3: '1',
        4: '2'
    },
    scores: {
        1: 10,
        2: 20,
        3: 30,
        4: 40
    },
    clickedAnswer: 0,
    displayQuestion: false,
    color: '#FF6663',
}

export const ScienceCategory = {
    questions: {
        1: "This essential gas is important so that we can breathe",
        2: "What is the nearest planet to the sun?",
        3: "What is the largest planet in the solar system?",
        4: "What is the rarest blood type?"
    },
    answers: {
        1: {
            1: "Oxygen",
            2: "Nitrogen",
            3: "Helium"
        },
        2: {
            1: "Mars",
            2: "Pluto",
            3: "Mercury"
        },
        3: {
            1: "Earth",
            2: "Saturn",
            3: "Jupiter"
        },
        4: {
            1: "O+",
            2: "AB-",
            3: "B-"
        },
    },
    correctAnswers: {
        1: '1',
        2: '3',
        3: '3',
        4: '2'
    },
    scores: {
        1: 10,
        2: 20,
        3: 30,
        4: 40
    },
    clickedAnswer: 0,
    displayQuestion: false,
    color: '#C7F9FA',
}

export const MusicCategory = {
    questions: {
        1: "Who was the first American Idol winner?",
        2: "Before Miley Cyrus recorded 'Wrecking Ball', it was offered to which singer?",
        3: "What rock icon was the founder of The Society for the Prevention of Cruelty to Long-haired Men?",
        4: "Eminem's 8 Mile is named after a road in which city?"
    },
    answers: {
        1: {
            1: "Kelly Clarkson",
            2: "Ryan Starr",
            3: "Hilary Duff"
        },
        2: {
            1: "Alicia Keys",
            2: "Beyonce",
            3: "Leona Lewis"
        },
        3: {
            1: "David Bowie",
            2: "Peter Frampton",
            3: "Mick Jagger"
        },
        4: {
            1: "Chicago",
            2: "San Fran",
            3: "Detroit"
        },
    },
    correctAnswers: {
        1: '1',
        2: '2',
        3: '1',
        4: '3'
    },
    scores: {
        1: 10,
        2: 20,
        3: 30,
        4: 40
    },
    clickedAnswer: 0,
    displayQuestion: false,
    color: '#FFFAD4',
}

export const NatureCategory = {
    questions: {
        1: "Which part of the plant conducts photosynthesis?",
        2: "What is the largest known land animal?",
        3: "Dolly was the first ever living creature to be cloned. What type of animal was she?",
        4: "What is the tallest type of grass?"
    },
    answers: {
        1: {
            1: "Stem",
            2: "Flower",
            3: "Leaf"
        },
        2: {
            1: "Hippopotamus",
            2: "Elephant",
            3: "Giraffe"
        },
        3: {
            1: "Sheep",
            2: "Mouse",
            3: "Worm"
        },
        4: {
            1: "Northwind switch grass",
            2: "Pampas grass",
            3: "Bamboo"
        },
    },
    correctAnswers: {
        1: '3',
        2: '2',
        3: '1',
        4: '3'
    },
    scores: {
        1: 10,
        2: 20,
        3: 30,
        4: 40
    },
    clickedAnswer: 0,
    displayQuestion: false,
    color: '#9EE992'
}

export const TriviaContext = createContext({
    category: null,
    question: 0,
    startQuestion: false,
    clickedAnswer: 0,
    correctAnswer: 0,
    timer: 60,
    score: 0,
    updateCategory: (categoryItem) => { },
    updateQuestion: (index) => { },
    toggleStartQuestion: () => { },
    updateClickedAnswer: (clickedAnswer) => { },
    updateCorrectAnswer: (correctAnswer) => { },
});


