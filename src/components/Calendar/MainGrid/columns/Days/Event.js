import React from "react";
import classes from "./Event.module.css";

const Event = (props) => {
  return <div className={classes.event}>{props.data.title}</div>;
};

export default Event;
