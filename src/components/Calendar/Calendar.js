import React from "react";
import Header from "./Header/Header";
import MainGrid from "./MainGrid/MainGrid";
import Stack from "@mui/material/Stack";

const Calendar = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      spacing={0}
    >
      <Header />
      <MainGrid />
    </Stack>
  );
};

export default Calendar;
