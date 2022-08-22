import React, { Fragment, useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./FormModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { TextField, Box, Slider } from "@mui/material";
import EventsContext from "../../store/event-context";
import { addDays } from "date-fns";

const marks = [
  {
    value: 0,
    label: "Niveau 1",
  },
  {
    value: 25,
    label: "Niveau 2",
  },
  {
    value: 50,
    label: "Niveau 3",
  },
  {
    value: 75,
    label: "Niveau 4",
  },
  {
    value: 100,
    label: "Niveau 5",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const { events, setEvents, weekStart, setWeekStart } =
    useContext(EventsContext);
  const [value, setValue] = useState(0);
  const nameRef = useRef();
  const subjectRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  let starthour =
    props.time.hour + 7 > 9 ? props.time.hour + 7 : `0${props.time.hour + 7}`;
  let endHour =
    props.time.hour + 8 > 9 ? props.time.hour + 8 : `0${props.time.hour + 8}`;
  const handleLevel = (value) => {
    return marks[marks.findIndex((level) => level.value === value)].label;
  };
  const getRefContent = () => {
    let start = startRef.current.value.split(":");
    let end = endRef.current.value.split(":");
    let day = addDays(new Date(weekStart), props.time.day);
    let y = day.getFullYear();
    let m = day.getMonth();
    let d = day.getDate();
    setEvents((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        title: nameRef.current.value,
        start: new Date(y, m, d, start[0], start[1], 0),
        end: new Date(y, m, d, end[0], end[1], 0),
        subject: subjectRef.current.value,
        level: handleLevel(value),
      },
    ]);
  };
  const changeValue = (event, value) => {
    setValue(value);
  };

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Ajouter séance</h2>
      </header>
      <div className={styles.content}>
        <TextField
          inputRef={nameRef}
          margin="normal"
          id="name"
          variant="outlined"
          required
          fullWidth
          autoFocus
          placeholder="Entrez le nom de l'instructeur"
        />
        <TextField
          inputRef={subjectRef}
          id="subject"
          variant="outlined"
          required
          fullWidth
          placeholder="Entrer le nom du sujet"
          margin="normal"
        />
        <TextField
          inputRef={startRef}
          id="startTime"
          label="From"
          type="time"
          defaultValue={starthour + ":00"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 5 min
          }}
          sx={{ width: 200 }}
          margin="normal"
        />
        <TextField
          inputRef={endRef}
          id="endTime"
          label="To"
          type="time"
          defaultValue={endHour + ":00"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 5 min
          }}
          sx={{ width: 200, marginLeft: 15 }}
          margin="normal"
        />
        <Box sx={{ width: 530, margin: 5 }}>
          <Slider
            aria-label="Custom levels"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={25}
            marks={marks}
            onChange={changeValue}
          />
        </Box>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>FERMER</Button>
        <Button
          onClick={() => {
            getRefContent();
            props.onConfirm();
          }}
        >
          AJOUTER
        </Button>
      </footer>
    </Card>
  );
};
const FormModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay time={props.time} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default FormModal;
