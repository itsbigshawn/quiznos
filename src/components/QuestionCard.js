import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TriviaContext } from '../common/TriviaObjects';
import 'reactjs-popup/dist/index.css';

function QuestionCard(props) {
    const classes = useStyles();
    const { toggleStartQuestion, updateCategory, updateQuestion } = useContext(TriviaContext);
    const index = props.question;
    const category = props.category;

    const updateState = (category, questionIndex) => {
        toggleStartQuestion();
        updateCategory(category);
        updateQuestion(questionIndex);
    }

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper} style={{ backgroundColor: category.color.card }}>
                {category.scores[index]}
                <Grid item>
                    <Button onClick={() => updateState(category, index)} className={classes.button} variant="outlined">Play</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({

    paper: {
        height: 190,
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

