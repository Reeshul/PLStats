import React, { Fragment } from "react";
import { makeStyles, Grid, LinearProgress } from "@material-ui/core";
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
  loaderWrapper: {
    paddingTop: "9.6rem",
  },
  loader: {
    height: "2.5rem",
  },
}));

const FixtureTable = ({
  incrementWeekNumber,
  decrementWeekNumber,
  weekNumber,
  fixtures,
  isLoaded,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      {isLoaded ? (
        <Grid className={classes.root}>
          <Grid direction="column" container>
            <FixtureTableHeader
              incrementWeekNumber={incrementWeekNumber}
              decrementWeekNumber={decrementWeekNumber}
              weekNumber={weekNumber}
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
      ) : (
        <Grid className={classes.root}>
          <Grid direction="column" container className={classes.loaderWrapper}>
            <LinearProgress className={classes.loader} color="secondary" />
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default FixtureTable;
