import React, { useState } from "react";
import classes from "./Cell.module.css";
import Event from "./Event";
import Wrapper from "../../../../../helpers/Wrapper";
import FormModal from "../../../../UI/FormModal";

const Cell = (props) => {
  const [myForm, setMyForm] = useState();
  let event = props.data[0];
  const handleClick = () => {
    if (!event) setMyForm(true);
  };
  const formHandler = () => {
    setMyForm(null);
  };
 
  return (
    <Wrapper>
      {myForm && <FormModal onConfirm={formHandler} />}
      <div className={classes.cell} onClick={handleClick}>
        {event && <Event data={event} />}
      </div>
    </Wrapper>
  );
};

export default Cell;
