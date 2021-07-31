import React, { Fragment } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import WeekInfo from "./WeekInfo";
import Fixture from "./Fixture";
import FixtureDate from "./FixtureDate";
import FixtureTableHeader from "./FixtureTableHeader";
import { sortFixturesByDate } from "../helpers/fixtureHelpers";

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
  fixtures,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid direction="column" container>
          <FixtureTableHeader
            incrementWeekNumber={incrementWeekNumber}
            decrementWeekNumber={decrementWeekNumber}
          />
          <WeekInfo weekNumber={weekNumber} />
          {Object.entries(sortFixturesByDate(fixtures).fixtureDay).map(
            (day) => (
              <Fragment key={day[0]}>
                <FixtureDate date={day[0]} />
                {day[1].map((fixture) => (
                  <Fixture fixture={fixture} key={fixture.id} />
                ))}
              </Fragment>
            )
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FixtureTable;
