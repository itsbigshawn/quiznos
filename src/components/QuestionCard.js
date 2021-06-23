import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TriviaContext } from '../common/TriviaContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function QuestionCard(props) {
    const classes = useStyles();
    const { startQuestion, toggleStartQuestion } = useContext(TriviaContext);
    const index = props.question;
    const category = props.category;

    const questionWindow = () => {
        console.log("startQuestion: ", startQuestion);

        // console.log("startQuestion: ", startQuestion);
    }

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper} style={{ backgroundColor: category.color }}>
                {category.scores[index]}
                <Grid item>
                    <Button onClick={toggleStartQuestion} className={classes.button} variant="outlined">Play</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 15,
    },
    paper: {
        height: 165,
        padding: theme.spacing(1),
        textAlign: 'center',
        fontSize: 50,
        color: theme.palette.text.secondary,
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'center',
        marginTop: 40,
    }
}));

export default QuestionCard;

