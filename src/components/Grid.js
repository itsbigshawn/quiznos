import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaContext';
import QuestionCard from './QuestionCard';
import Popup from 'reactjs-popup';
import './Grid.css'
import QuestionWindow from './QuestionWindow';

function NestedGrid() {
    const classes = useStyles();
    const { score, startQuestion } = useContext(TriviaContext);

    const formRow = (category) => {
        return (
            <React.Fragment >
                <QuestionCard question={1} category={category} />
                <QuestionCard question={2} category={category} />
                <QuestionCard question={3} category={category} />
                <QuestionCard question={4} category={category} />
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className='header' style={{ textAlign: 'center' }}>
                <h1> Your score: {score} </h1>

            </div>
            <div className='sideBar'>
                <div className='label'>
                    <h1 style={{ color: "#C70039" }}>Sports</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: "#AAD9DC" }}>Science</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: "#FFEB80" }}>Music</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: "#9EE992" }}>Nature</h1>
                </div>
            </div>
            <div className='cardContainer'>
                <Grid container
                    spacing={1}
                    justify="center"
                >
                    <Grid container item xs={12} spacing={2}>
                        {formRow(SportsCategory)}
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        {formRow(ScienceCategory)}
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        {formRow(MusicCategory)}
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        {formRow(NatureCategory)}
                    </Grid>
                </Grid>
                {startQuestion &&
                    < QuestionWindow />
                }
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 15,
    },
}));

export default NestedGrid