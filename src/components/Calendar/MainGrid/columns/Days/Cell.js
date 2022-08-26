import React, { useState } from "react";
import classes from "./Cell.module.css";
import Event from "./Event";
import Wrapper from "../../../../../helpers/Wrapper";
import FormModal from "../../../../UI/FormModal";
import InfoModal from "../../../../UI/InfoModal";

const Cell = (props) => {
  const [myForm, setMyForm] = useState();
  const [info, setInfo] = useState();
  const [edit, setEdit] = useState();
  let event = props.data[0];
  const handleClick = () => {
    setMyForm(true);
  };
  const formHandler = () => {
    setMyForm(null);
    setEdit(null);
  };
  const handleEventClick = (event) => {
    event.stopPropagation();
    setInfo(true);
  };
  const infoHandler = () => {
    setInfo(null);
  };
  const handleEditClick = () => {
    setInfo(null);
    setEdit(true);
    setMyForm(true);
  };
  return (
    <Wrapper>
      {myForm && (
        <FormModal
          onConfirm={formHandler}
          time={{ day: props.day, hour: props.hour }}
          event={event}
          edit={edit}
        />
      )}
      {info && (
        <InfoModal
          onConfirm={infoHandler}
          event={event}
          onEdit={handleEditClick}
        />
      )}
      <div className={classes.cell} onClick={handleClick}>
        {event && <Event data={event} onConfirm={handleEventClick} />}
      </div>
    </Wrapper>
  );
};

export default Cell;
