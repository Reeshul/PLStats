import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  weekInfo: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.common.darkGray}`,
  },
}));

const WeekInfo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="h5" elevation={0} className={classes.weekInfo}>
          Week 1
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WeekInfo;
