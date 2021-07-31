import React, { useState, useEffect } from "react";
import FixtureTable from "../components/FixturesTable";
import { makeStyles, Grid } from "@material-ui/core";
import { proxy } from "../app.config";
import { sortFixturesByEvent } from "../helpers/fixtureHelpers";

const url = "https://fantasy.premierleague.com/api/fixtures";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
  },
}));

const Fixtures = () => {
  const classes = useStyles();

  // ***

  // TODO: Create state variables and fetch data from endpoint

  // State variables for FixturesTable

  // - Week Number - DONE

  // State variables for Fixture

  // - Fixtures array for week number - DONE
  // - Home Team
  // - Away Team
  // - Fixture Date
  // - KickOffTime

  // ***

  // State variables
  const [weekNumber, setWeekNumber] = useState(1);
  const [fixtures, setFixtures] = useState([]);

  // onClick handlers
  const incrementWeekNumber = () => {
    if (weekNumber < 38) setWeekNumber(weekNumber + 1);
  };
  const decrementWeekNumber = () => {
    if (weekNumber > 1) setWeekNumber(weekNumber - 1);
  };

  // Fetch data from endpoint
  useEffect(() => {
    async function fetchFixtures() {
      let response = await fetch(proxy + url).catch(handleError);
      response = await response.json();
      if (response.code && response.code === 400) return;
      setFixtures(sortFixturesByEvent(response).fixtureWeek[weekNumber]);
    }
    fetchFixtures();
  }, [weekNumber]);

  // Handle fetch error with 400 response code
  const handleError = (err) => {
    console.warn(err);
    return new Response(
      JSON.stringify({
        code: 400,
        message: "Could not fetch fixtures",
      })
    );
  };

  // useEffect(() => {
  //   fetch(proxyurl + url)
  //     .then((res) => res.json())
  //     .then((data) =>
  //       console.log(
  //         sortFixturesByDate(sortFixturesByEvent(data).fixtureWeek[1])
  //           .fixtureDay["Saturday 14 August 2021"]
  //       )
  //     );
  // }, []);

  // console.log(fixtures)

  return (
    <Grid className={classes.root}>
      <FixtureTable
        incrementWeekNumber={incrementWeekNumber}
        weekNumber={weekNumber}
        decrementWeekNumber={decrementWeekNumber}
        fixtures={fixtures}
      />
    </Grid>
  );
};

export default Fixtures;
