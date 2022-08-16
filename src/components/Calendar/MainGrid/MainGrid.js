import React from "react";
import classes from "./MainGrid.module.css";
import Hours from "./columns/Hours/Hours";
import Days from "./columns/Days/Days";
import Grid from "@mui/material/Grid";

const MainGrid = (props) => {
  return (
    <Grid container spacing={0} columns={18} className={classes.mainGrid}>
      <Grid item xs={1}>
        <Hours />
      </Grid>
      <Grid item xs={17}>
        <Days sendData={props.sendData} />
      </Grid>
    </Grid>
  );
};

export default MainGrid;
