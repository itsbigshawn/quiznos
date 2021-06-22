import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TriviaContext } from '../common/TriviaContext';

function QuestionCard(props) {
    const classes = useStyles();
    const { sports, science, nature, music } = useContext(TriviaContext);
    const index = props.question;
    const category = props.category;

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper} style={{ backgroundColor: category.color }}>{category.questions[index]}</Paper>
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
        color: theme.palette.text.secondary,
    },
}));

export default QuestionCard;

