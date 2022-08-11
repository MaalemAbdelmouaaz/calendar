import React, { useState } from "react";
import classes from "./Header.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DaysHeader from "./DaysHeader";
import Stack from "@mui/material/Stack";

const Header = () => {
  let today = new Date();
  let ws = getMonday(today);
  let we = getSunday(today);
  console.log(ws, "value");

  const [weekStart, setWeekStart] = useState(ws);
  const [weekEnd, setWeekEnd] = useState(we);
  console.log(weekStart, "state1");
  const previousWeek = () => {
    let previousWeekStart = getPreviousMonday(weekStart);
    let previousWeekEnd = getPreviousSunday(weekStart);
    setWeekStart(previousWeekStart);
    setWeekEnd(previousWeekEnd);
    console.log(weekStart, "state2");
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
        <button onClick={previousWeek}>click</button>
        <ArrowBackIosIcon />
        {weekTitle(weekStart, weekEnd)}
        <ArrowForwardIosIcon />
      </h3>
      <DaysHeader data={weekStart} />
    </Stack>
  );
};
const getMonday = (d) => {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};
const getSunday = (d) => {
  const first = d.getDate() - d.getDay() + 1;
  const last = first + 6;
  const sunday = new Date(d.setDate(last));
  return sunday;
};
const getPreviousMonday = (date) => {
  const previousMonday = new Date();
  previousMonday.setDate(date.getDate() - 7);
  return previousMonday;
};
const getPreviousSunday = (date) => {
  const previousSunday = new Date();
  previousSunday.setDate(date.getDate() - 1);
  return previousSunday;
};
const weekTitle = (weekStart, weekEnd) => {
  //TODO: fix weeks that include different years
  let startDay = weekStart.toLocaleString("fr", { day: "numeric" });
  let startMonth = weekStart.toLocaleString("fr", { month: "long" });
  let lasttDay = weekEnd.toLocaleString("fr", { day: "numeric" });
  let lastMonth = weekEnd.toLocaleString("fr", { month: "long" });
  let year = weekStart.getFullYear();
  return `${startDay} ${startMonth} - ${lasttDay} ${lastMonth} ${year}`;
};
export default Header;
