import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.common.darkGray}`,
  },
  dayAndDate: {
    backgroundColor: theme.palette.common.darkGray,
    margin: 0,
    padding: "0.5rem 1rem",
    fontSize: "1.3rem",
  },
}));

const FixtureDate = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <Paper elevation={0} className={classes.dayAndDate}>
          <Typography variant="overline">Friday 13 August 2021</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FixtureDate;
