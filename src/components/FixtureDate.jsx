import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dayAndDate: {
    backgroundColor: theme.palette.common.lightPurple,
    margin: 0,
    padding: "0.5rem 1rem",
    fontSize: "1.3rem",
    textAlign: "center",
  },
}));

const FixtureDate = ({ date }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs className={classes.dayAndDate}>
        <Typography variant="overline" color="textSecondary">
          {date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FixtureDate;
