import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
// import theme from "../theme";

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
  homeTeamName: {
    fontSize: "1.7rem",
    verticalAlign: "middle",
  },
  homeTeamBadgeWrapper: {
    marginLeft: "0.6rem",
    marginRight: "0.6rem",
    display: "inline-block",
  },
  homeTeamBadge: {
    display: "inline-block",
    verticalAlign: "middle",
    opacity: 1,
    transition: "opacity .35s ease-in-out, transform .2s",
  },
  badge: {
    textAlign: "center",
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    borderBottom: `1px solid ${theme.palette.common.darkGray}`,
    width: 30,
    height: 30,
    display: "flex",
  },
  koTime: {
    padding: "0.8rem 1.6rem",
    fontSize: "1.3rem",
    flex: "1 0 6.6rem",
    display: "inline-block",
    border: `1px solid ${theme.palette.common.lightGray}`,
    lineHeight: "1.1",
    textAlign: "center",
    fontFamily: theme.ty,
  },
  awayTeamInfo: {
    textAlign: "left",
    flex: "1 1 calc(50% - 3.3rem)",
  },
  awayTeamName: {
    fontSize: "1.7rem",
    verticalAlign: "middle",
  },
  awayTeamBadgeWrapper: {
    marginLeft: "0.6rem",
    marginRight: "0.6rem",
    display: "inline-block",
  },
  awayTeamBadge: {
    display: "inline-block",
    verticalAlign: "middle",
    opacity: 1,
    transition: "opacity .35s ease-in-out, transform .2s",
  },
}));

const Fixture = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.fixtureInfo}>
        <Grid item xs={5} className={classes.homeTeamInfo}>
          <span className={classes.homeTeamName}>Brentford</span>
          <div className={classes.homeTeamBadgeWrapper}>
            <img
              className={classes.homeTeamBadge}
              src={BrentfordBadge}
              alt="Brentford"
              width={30}
              height={30}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" className={classes.koTime}>
            20:00
          </Typography>
        </Grid>
        <Grid item xs={5} className={classes.awayTeamInfo}>
          <div className={classes.awayTeamBadgeWrapper}>
            <img
              className={classes.awayTeamBadge}
              src={ArsenalBadge}
              alt="Arsenal"
              width={30}
              height={30}
            />
          </div>
          <span className={classes.awayTeamName}>Arsenal</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Fixture;
