import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
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

const FixtureTable = ({
  incrementWeekNumber,
  decrementWeekNumber,
  weekNumber,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid direction="column" container>
        <FixtureTableHeader
          incrementWeekNumber={incrementWeekNumber}
          weekNumber={weekNumber}
          decrementWeekNumber={decrementWeekNumber}
        />
        <WeekInfo weekNumber={weekNumber} />
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
    </Grid>
  );
};

export default FixtureTable;
