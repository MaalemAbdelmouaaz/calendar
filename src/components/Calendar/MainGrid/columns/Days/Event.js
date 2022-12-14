import React from "react";
import classes from "./Event.module.css";
import BigBen from "../../../../../resources/bigben.png";

const Event = (props) => {
  const handleHeight = () => {
    return (Math.abs(props.data.end - props.data.start) / 36e5) * 28 - 6;
  };
  const handlePosition = () => {
    return (props.data.start.getMinutes() * 25) / 60;
  };
  return (
    <div
      className={classes.event}
      id={props.data.id}
      style={{ height: `${handleHeight()}px`, top: handlePosition() , left: 0}}
      onClick={props.onConfirm}
    >
      <img className={classes.image} src={BigBen} />
      {props.data.subject + " || " + props.data.level}
    </div>
  );
};

export default Event;
