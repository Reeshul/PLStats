import React, { Fragment } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { PreviousArrow, NextArrow } from "./ArrowIcons";

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    flexBasis: "50%",
    padding: "0px 1rem",
  },
}));

const FixtureTableHeader = ({
  incrementWeekNumber,
  decrementWeekNumber,
  weekNumber,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs className={classes.buttonWrapper}>
        {weekNumber > 1 ? (
          <Typography variant="button" onClick={decrementWeekNumber}>
            <PreviousArrow />
            Previous
          </Typography>
        ) : (
          <Fragment></Fragment>
        )}
      </Grid>
      <Grid item xs className={classes.buttonWrapper}>
        {weekNumber < 38 ? (
          <Typography variant="button" onClick={incrementWeekNumber}>
            Next
            <NextArrow />
          </Typography>
        ) : (
          <Fragment></Fragment>
        )}
      </Grid>
    </Grid>
  );
};

export default FixtureTableHeader;
