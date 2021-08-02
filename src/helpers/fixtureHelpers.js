import ArsenalBadge from "../assets/badges/1.png";
import AstonVillaBadge from "../assets/badges/2.png";
import BrentfordBadge from "../assets/badges/3.png";
import BrightonBadge from "../assets/badges/4.png";
import BurnleyBadge from "../assets/badges/5.png";
import ChelseaBadge from "../assets/badges/6.png";
import CrystalPalaceBadge from "../assets/badges/7.png";
import EvertonBadge from "../assets/badges/8.png";
import LeedsBadge from "../assets/badges/9.png";
import LeicesterBadge from "../assets/badges/10.png";
import LiverpoolBadge from "../assets/badges/11.png";
import ManCityBadge from "../assets/badges/12.png";
import ManUtdBadge from "../assets/badges/13.png";
import NewcastleBadge from "../assets/badges/14.png";
import NorwichBadge from "../assets/badges/15.png";
import SouthamptonBadge from "../assets/badges/16.png";
import SpursBadge from "../assets/badges/17.png";
import WatfordBadge from "../assets/badges/18.png";
import WestHamBadge from "../assets/badges/19.png";
import WolvesBadge from "../assets/badges/20.png";

export const teamIds = {
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

export const teamBadges = {
  1: ArsenalBadge,
  2: AstonVillaBadge,
  3: BrentfordBadge,
  4: BrightonBadge,
  5: BurnleyBadge,
  6: ChelseaBadge,
  7: CrystalPalaceBadge,
  8: EvertonBadge,
  9: LeedsBadge,
  10: LeicesterBadge,
  11: LiverpoolBadge,
  12: ManCityBadge,
  13: ManUtdBadge,
  14: NewcastleBadge,
  15: NorwichBadge,
  16: SouthamptonBadge,
  17: SpursBadge,
  18: WatfordBadge,
  19: WestHamBadge,
  20: WolvesBadge,
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
    if (!fixturesByDate.fixtureDay[kickOffTimeToLongDate(kickoff_time)])
      fixturesByDate.fixtureDay[kickOffTimeToLongDate(kickoff_time)] = [];
    fixturesByDate.fixtureDay[kickOffTimeToLongDate(kickoff_time)].push(
      fixture
    );
  });
  return fixturesByDate;
};

export const kickOffTimeToLongDate = function (kickOffTime) {
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

export const kickOffTimeToShortDate = function (kickOffTime) {
  const dateObject = new Date(kickOffTime);
  const options = {
    weekday: "short",
    month: "short",
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
