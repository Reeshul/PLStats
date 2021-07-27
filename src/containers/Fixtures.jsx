import React from "react";
import FixtureTable from "../components/FixturesTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
  },
}));

const Fixtures = () => {
  const classes = useStyles();

  // TODO: Create state variables and fetch data from endpoint

  return (
    <div className={classes.root}>
      <FixtureTable />
    </div>
  );
};

export default Fixtures;
