import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { PreviousArrow, NextArrow } from "./ArrowIcons";

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    flexBasis: "50%",
    padding: "0px 1rem",
  },
}));

const FixtureTableFooter = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs className={classes.buttonWrapper}>
        <Typography variant="button">
          <PreviousArrow />
          Previous
        </Typography>
      </Grid>
      <Grid item xs className={classes.buttonWrapper}>
        <Typography variant="button">
          Next
          <NextArrow />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FixtureTableFooter;
