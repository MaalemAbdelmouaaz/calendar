import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./InfoModal.module.css";
import Card from "./Card";
import Button from "./Button";
import EventsContext from "../../store/event-context";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const { events, setEvents } = useContext(EventsContext);
  const onDelete = () => {
    let newEvents = events;
    let removeIndex = newEvents.map((item) => item.id).indexOf(props.event.id);
    ~removeIndex && newEvents.splice(removeIndex, 1);
    setEvents([...newEvents]);
    props.onConfirm();
  };
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Séance en direct</h2>
        <p onClick={props.onConfirm}>Fermer</p>
      </header>
      <div className={styles.content}>
        <div className={styles.subject}>{props.event.subject}</div>
        <div className={styles.title}>
          {props.event.subject + " || " + props.event.level}
        </div>
        <hr />
        <div className={styles.instructeur}>
          Instructeur : {props.event.title}
          <br /> Niveau : {props.event.level}
        </div>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>FERMER</Button>
        <Button onClick={onDelete}>SUPPRIMER</Button>
        <Button onClick={props.onEdit}>MODIFIER</Button>
      </footer>
    </Card>
  );
};

const InfoModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          event={props.event}
          onConfirm={props.onConfirm}
          onEdit={props.onEdit}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default InfoModal;
