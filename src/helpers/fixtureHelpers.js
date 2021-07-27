export const clubIds = {
  1: "Arsenal",
  2: "Aston Villa",
  3: "Brentford",
  4: "Brighton",
  5: "Burnley",
  6: "Chelsea",
  7: "Crystal Palace",
  8: "Everton",
  9: "Leeds",
  10: "Leicester",
  11: "Liverpool",
  12: "Man City",
  13: "Man Utd",
  14: "Newcastle",
  15: "Norwich",
  16: "Southampton",
  17: "Spurs",
  18: "Watford",
  19: "West Ham",
  20: "Wolves",
};

export const sortFixturesByEvent = function (groupOfAllFixtures) {
  const fixturesByEvent = {
    fixtureWeek: [],
  };
  groupOfAllFixtures.forEach((fixture) => {
    const { event } = fixture;
    if (!fixturesByEvent.fixtureWeek[event])
      fixturesByEvent.fixtureWeek[event] = [];
    fixturesByEvent.fixtureWeek[event].push(fixture);
  });
  return fixturesByEvent;
};

export const sortFixturesByDate = function (fixturesByEvent) {
  const fixturesByDate = {
    fixtureDay: [],
  };
  fixturesByEvent.forEach((fixture) => {
    const { kickoff_time } = fixture;
    if (!fixturesByDate.fixtureDay[kickOffTimeToDate(kickoff_time)])
      fixturesByDate.fixtureDay[kickOffTimeToDate(kickoff_time)] = [];
    fixturesByDate.fixtureDay[kickOffTimeToDate(kickoff_time)].push(fixture);
  });
  return fixturesByDate;
};

export const kickOffTimeToDate = function (kickOffTime) {
  const dateObject = new Date(kickOffTime);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = dateObject.toLocaleDateString("en-GB", options);
  // Remove comma after day
  return dateString.replace(/,/g, "");
};

export const kickOffTimeToTime = function (kickOffTime) {
  const dateObject = new Date(kickOffTime);
  const options = { hour: "2-digit", minute: "2-digit" };
  const timeString = dateObject.toLocaleTimeString("en-GB", options);
  return timeString;
};
