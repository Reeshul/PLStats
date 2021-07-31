import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import {
  kickOffTimeToTime,
  teamIds,
  teamBadges,
} from "../helpers/fixtureHelpers";

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
  kickOffTimeWrapper: {
    margin: "0 auto",
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

const Fixture = ({ fixture }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.fixtureInfo}>
        <Grid item xs={5} className={classes.homeTeamInfo}>
          <Typography variant="body2" className={classes.teamName}>
            {teamIds[fixture.team_h].toString()}
          </Typography>
          <Grid className={classes.teamBadgeWrapper}>
            <img
              className={classes.teamBadge}
              src={teamBadges[fixture.team_h]}
              alt={teamIds[fixture.team_h]}
              width={30}
              height={30}
            />
          </Grid>
        </Grid>
        <Grid item className={classes.kickOffTimeWrapper}>
          <Typography variant="subtitle2" className={classes.kickOffTime}>
            {kickOffTimeToTime(fixture.kickoff_time)}
          </Typography>
        </Grid>
        <Grid item xs={5} className={classes.awayTeamInfo}>
          <Grid className={classes.teamBadgeWrapper}>
            <img
              className={classes.teamBadge}
              src={teamBadges[fixture.team_a]}
              alt={teamIds[fixture.team_a]}
              width={30}
              height={30}
            />
          </Grid>
          <Typography variant="body2" className={classes.teamName}>
            {teamIds[fixture.team_a].toString()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Fixture;
