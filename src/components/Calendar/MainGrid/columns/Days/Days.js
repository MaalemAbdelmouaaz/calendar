import React from "react";
import Cells from "./Cells";
import Grid from "@mui/material/Grid";
import classes from "./Days.module.css";

const Days = () => {
  return (
    <Grid container columns={7} className={classes.days}>
      {Array.from(Array(7)).map((_, index) => (
        <Grid item xs={1}>
          <Cells />
        </Grid>
      ))}
    </Grid>
  );
};

export default Days;
