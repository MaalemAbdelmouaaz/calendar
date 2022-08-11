import React from "react";
import classes from "./Cells.module.css";
import Grid from "@mui/material/Grid";
import Cell from "./Cell";

const Cells = () => {
  return (
    <Grid className={classes.cells}>
      {Array.from(Array(17)).map((_, index) => (
        <Cell />
      ))}
    </Grid>
  );
};

export default Cells;
