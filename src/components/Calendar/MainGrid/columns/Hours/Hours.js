import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./Hours.module.css";

const Hours = () => {
  const list = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  return (
    <Grid direction="column" className={classes.grid}>
      {list.map((cur, index) => (
        <p>{cur}:00</p>
      ))}
    </Grid>
  );
};

export default Hours;
