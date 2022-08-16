import React from "react";
import classes from "./DaysHeader.module.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const DaysHeader = (props) => {
  let day = new Date(props.data);
  let data = [
    {
      d: day.toLocaleString("fr", { day: "numeric" }),
      m: day.toLocaleString("fr", { month: "long" }),
    },
  ];
  for (let i = 1; i < 7; i++) {
    day.setDate(day.getDate() + 1);
    data.push({
      d: day.toLocaleString("fr", { day: "numeric" }),
      m: day.toLocaleString("fr", { month: "long" }),
    });
  }

  const list = [
    { name: "Lundi", day: data[0].d, month: data[0].m },
    { name: "Mardi", day: data[1].d, month: data[1].m },
    { name: "Mercredi", day: data[2].d, month: data[2].m },
    { name: "Jeudi", day: data[3].d, month: data[3].m },
    { name: "Vendredi", day: data[4].d, month: data[4].m },
    { name: "Samedi", day: data[5].d, month: data[5].m },
    { name: "Dimanche", day: data[6].d, month: data[6].m },
  ];
  return (
    <Grid container columns={7} className={classes.days}>
      {list.map((cur, index) => (
        <Grid item xs={1}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={classes.head}
          >
            <p className={classes.par}>
              <span>{cur.name + " "}</span> <br /> {cur.day + " " + cur.month}
            </p>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default DaysHeader;
