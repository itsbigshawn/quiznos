import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TriviaContext } from '../common/TriviaContext';
import QuestionCard from './QuestionCard';

function NestedGrid() {
    const classes = useStyles();
    const { sports, science, nature, music } = useContext(TriviaContext);

    function FormRow(props) {
        let category = props.category;
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
        <div className={classes.root}>
            <Grid container
                spacing={1}
                justify="center"
            >
                <Grid container item xs={12} spacing={2}>
                    <FormRow category={sports} />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <FormRow category={science} />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <FormRow category={music} />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <FormRow category={nature} />
                </Grid>
            </Grid>
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