import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { PreviousArrow, NextArrow } from "./ArrowIcons";

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    flexBasis: "50%",
    padding: "0px 1rem",
  },
}));

const FixtureTableHeader = ({ incrementWeekNumber, decrementWeekNumber }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs className={classes.buttonWrapper}>
        <Typography variant="button" onClick={decrementWeekNumber}>
          <PreviousArrow />
          Previous
        </Typography>
      </Grid>
      <Grid item xs className={classes.buttonWrapper}>
        <Typography variant="button" onClick={incrementWeekNumber}>
          Next
          <NextArrow />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FixtureTableHeader;
