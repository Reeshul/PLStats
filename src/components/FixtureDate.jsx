import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dayAndDate: {
    backgroundColor: theme.palette.common.darkGray,
    margin: 0,
    padding: "0.5rem 1rem",
    fontSize: "1.3rem",
    textAlign: "center",
  },
}));

const FixtureDate = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs className={classes.dayAndDate}>
        <Typography variant="overline">Friday 13 August 2021</Typography>
      </Grid>
    </Grid>
  );
};

export default FixtureDate;
