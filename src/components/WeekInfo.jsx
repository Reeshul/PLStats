import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  weekInfo: {
    padding: theme.spacing(2),
  },
}));

const WeekInfo = ({ weekNumber }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="h5" align="center" className={classes.weekInfo}>
          Week {weekNumber}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WeekInfo;
