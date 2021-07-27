import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import ArsenalBadge from "../assets/badges/1.png";
import BrentfordBadge from "../assets/badges/3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.common.darkGray}`,
    position: "relative",
  },
  fixtureInfo: {
    margin: "0.7rem 0 -1.2rem 0",
    alignItems: "center",
    color: theme.palette.text.primary,
    display: "flex",
  },
  homeTeamInfo: {
    textAlign: "right",
    flex: "1 1 calc(50% - 3.3rem)",
  },
  teamName: {
    fontSize: "1.7rem",
    verticalAlign: "middle",
  },
  teamBadgeWrapper: {
    marginLeft: "0.6rem",
    marginRight: "0.6rem",
    display: "inline-block",
  },
  teamBadge: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  kickOffTime: {
    padding: "0.8rem 1.6rem",
    fontSize: "1.3rem",
    flex: "1 0 6.6rem",
    display: "inline-block",
    border: `1px solid ${theme.palette.common.lightGray}`,
    lineHeight: "1.1",
    textAlign: "center",
  },
  awayTeamInfo: {
    textAlign: "left",
    flex: "1 1 calc(50% - 3.3rem)",
  },
}));

const Fixture = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.fixtureInfo}>
        <Grid item xs={5} className={classes.homeTeamInfo}>
          <Typography variant="body2" className={classes.teamName}>
            Brentford
          </Typography>
          <Grid className={classes.teamBadgeWrapper}>
            <img
              className={classes.teamBadge}
              src={BrentfordBadge}
              alt="Brentford"
              width={30}
              height={30}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" className={classes.kickOffTime}>
            20:00
          </Typography>
        </Grid>
        <Grid item xs={5} className={classes.awayTeamInfo}>
          <Grid className={classes.teamBadgeWrapper}>
            <img
              className={classes.teamBadge}
              src={ArsenalBadge}
              alt="Arsenal"
              width={30}
              height={30}
            />
          </Grid>
          <Typography variant="body2" className={classes.teamName}>
            Arsenal
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Fixture;
