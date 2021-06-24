import React, { useContext } from 'react';
import { SportsCategory, ScienceCategory, MusicCategory, NatureCategory, TriviaContext } from '../common/TriviaObjects';
import QuestionCard from './QuestionCard';
import QuestionWindow from './QuestionWindow';
import Grid from '@material-ui/core/Grid';
import './Grid.css'

function MainGrid() {
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
                    <h1 style={{ color: SportsCategory.color.text }}>Sports</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: ScienceCategory.color.text }}>Science</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: MusicCategory.color.text }}>Music</h1>
                </div>
                <div className='label'>
                    <h1 style={{ color: NatureCategory.color.text }}>Nature</h1>
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

export default MainGrid