import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DaysHeader from "./DaysHeader";
import Stack from "@mui/material/Stack";
import {
  startOfWeek,
  endOfWeek,
  getDate,
  previousMonday,
  previousSunday,
  nextMonday,
  nextSunday,
  format,
  isSameWeek,
} from "date-fns";
import { fr } from "date-fns/locale";
import EventsContext from "../../../store/event-context";

const Header = (props) => {
  let today = new Date();
  let ws = startOfWeek(today, { weekStartsOn: 1 });
  let we = endOfWeek(today, { weekStartsOn: 1 });
  const { events, setEvents, weekStart, setWeekStart } =
    useContext(EventsContext);
  const [weekEnd, setWeekEnd] = useState(we);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    setEventsList(getEvents);
  }, [weekStart, events]);
  props.sendData(eventsList);
  const previousWeek = () => {
    let previousWeekStart = previousMonday(new Date(weekStart));
    let previousWeekEnd = previousSunday(new Date(weekStart));
    setWeekStart(previousWeekStart);
    setWeekEnd(previousWeekEnd);
  };

  const nextWeek = () => {
    let nextWeekStart = nextMonday(new Date(weekStart));
    let nextWeekEnd = nextSunday(new Date(weekEnd));
    setWeekStart(nextWeekStart);
    setWeekEnd(nextWeekEnd);
  };

  const getEvents = () => {
    return events.filter((item) =>
      isSameWeek(item.start, weekStart, {
        weekStartsOn: 1,
      })
    );
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      className={classes.header}
    >
      <h3>
        <ArrowBackIosIcon className={classes.iconLeft} onClick={previousWeek} />
        {weekTitle(weekStart, weekEnd)}
        <ArrowForwardIosIcon className={classes.iconRight} onClick={nextWeek} />
      </h3>
      <DaysHeader data={weekStart} />
    </Stack>
  );
};

const weekTitle = (weekStart, weekEnd) => {
  let startDay = getDate(weekStart);
  let startMonth = format(weekStart, "LLLL", { locale: fr });
  let lasttDay = getDate(weekEnd);
  let lastMonth = format(weekEnd, "LLLL", { locale: fr });
  let startYear = weekStart.getFullYear();
  let endYear = weekEnd.getFullYear();
  return `${startDay} ${startMonth} ${
    startYear !== endYear ? startYear : ""
  } - ${lasttDay} ${lastMonth} ${endYear} `;
};
export default Header;
