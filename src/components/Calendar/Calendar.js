import React, { useState } from "react";
import Header from "./Header/Header";
import MainGrid from "./MainGrid/MainGrid";
import Stack from "@mui/material/Stack";
import EventsContext from "../../store/event-context";
import myEvents from "../../resources/events";
import { startOfWeek, endOfWeek } from "date-fns";

const Calendar = () => {
  let today = new Date();
  let ws = startOfWeek(today, { weekStartsOn: 1 });
  const [weekStart, setWeekStart] = useState(ws);
  const [data, setData] = useState([]);
  const [events, setEvents] = useState(myEvents);

  const getData = (val) => {
    setData(val);
  };
  return (
    <EventsContext.Provider value={{ events, setEvents, weekStart, setWeekStart }}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={0}
      >
        <Header sendData={getData} />
        <MainGrid sendData={data} />
      </Stack>
    </EventsContext.Provider>
  );
};

export default Calendar;
