import React from "react";
import Cells from "./Cells";
import Grid from "@mui/material/Grid";
import classes from "./Days.module.css";

const Days = (props) => {
  const sendData = (day) => {
    day = day === 6 ? 0 : day + 1;
    return props.sendData.filter((item) => item.start.getDay() === day);
  };

  return (
    <Grid container columns={7} className={classes.days}>
      {Array.from(Array(7)).map((_, index) => (
        <Grid item xs={1}>
          <Cells data={sendData(index)} day={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Days;
