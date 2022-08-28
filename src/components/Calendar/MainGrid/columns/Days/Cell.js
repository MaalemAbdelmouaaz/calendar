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
  const [myEvent, setMyEvent] = useState();
  let events = props.data;
  const handleClick = () => {
    setMyForm(true);
  };
  const formHandler = () => {
    setMyForm(null);
    setEdit(null);
  };
  const handleEventClick = (obj) => (event) => {
    event.stopPropagation();
    setMyEvent(obj);
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
          event={myEvent}
          edit={edit}
        />
      )}
      {info && (
        <InfoModal
          onConfirm={infoHandler}
          event={myEvent}
          onEdit={handleEditClick}
        />
      )}
      <div className={classes.cell} onClick={handleClick}>
        {events[0] &&
          props.data.map((_, index) => (
            <Event
              data={events[index]}
              onConfirm={handleEventClick(events[index])}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Cell;
