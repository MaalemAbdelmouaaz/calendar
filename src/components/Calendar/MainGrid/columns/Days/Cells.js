import React from "react";
import classes from "./Cells.module.css";
import Grid from "@mui/material/Grid";
import Cell from "./Cell";

const Cells = (props) => {
  const sendData = (index) => {
    index = index + 7;
    return props.data.filter((item) => item.start.getHours() === index);
  };
  return (
    <Grid className={classes.cells}>
      {Array.from(Array(17)).map((_, index) => (
        <Cell data={sendData(index)} day={props.day} hour={index}/>
      ))}
    </Grid>
  );
};

export default Cells;
