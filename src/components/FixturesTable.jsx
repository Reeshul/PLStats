import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WeekInfo from "./WeekInfo";
import Fixture from "./Fixture";
import FixtureDate from "./FixtureDate";
import FixtureTableHeader from "./FixtureTableHeader";
import FixtureTableFooter from "./FixtureTableFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: theme.typography.fontFamily,
  },
}));

const FixtureTable = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid direction="column" container>
        <FixtureTableHeader />
        <WeekInfo />
        <FixtureDate />
        <Fixture />
        <FixtureDate />
        <Fixture />
        <Fixture />
        <Fixture />
        <Fixture />
        <Fixture />
        <Fixture />
        <Fixture />
        <FixtureDate />
        <Fixture />
        <Fixture />
        <FixtureTableFooter />
      </Grid>
    </div>
  );
};

export default FixtureTable;
