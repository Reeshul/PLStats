import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper}>Previous</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Next</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>
            Date of Fixtures (e.g. Friday 13 August 2021)
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>
            Date of Fixtures (e.g. Saturday 14 August 2021)
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper className={classes.paper}>
            Date of Fixtures (e.g. Sunday 15 August 2021)
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>HT Name</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>H</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>A</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>AT Name</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper}>Previous</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Next</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
