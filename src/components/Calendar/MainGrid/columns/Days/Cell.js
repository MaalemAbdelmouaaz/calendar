import React, { useState } from "react";
import classes from "./Cell.module.css";
import Event from "./Event";
import Wrapper from "../../../../../helpers/Wrapper";
import FormModal from "../../../../UI/FormModal";
import InfoModal from "../../../../UI/InfoModal";

const Cell = (props) => {
  const [myForm, setMyForm] = useState();
  const [info, setInfo] = useState();
  let event = props.data[0];
  const handleClick = () => {
    if (!event) {
      setMyForm(true);
    } else {
      setInfo(true);
    }
  };
  const formHandler = () => {
    setMyForm(null);
  };
  const infoHandler = () => {
    setInfo(null);
  };

  return (
    <Wrapper>
      {myForm && (
        <FormModal
          onConfirm={formHandler}
          time={{ day: props.day, hour: props.hour }}
        />
      )}
      {info && <InfoModal onConfirm={infoHandler} event={props.data[0]} />}
      <div className={classes.cell} onClick={handleClick}>
        {event && <Event data={event} />}
      </div>
    </Wrapper>
  );
};

export default Cell;
