import React, { useState, useEffect } from "react";
import { Stack, Paper, Typography } from "@mui/material";

const adjustDate = (date: number) => {
  return date < 10 ? `0${date}` : date;
};

const CountdownBox = ({ number, text }: { number: number; text: string }) => {
  const boxSize = {
    xs: 80,
    md: 160,
  };
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: boxSize,
          height: boxSize,
        }}
      >
        <Typography
          variant="h2"
          color="primary.contrastText"
          margin={0}
          sx={{ fontSize: { xs: 28, md: 56 } }}
        >
          {adjustDate(number)}
        </Typography>
        <Typography
          variant="body1"
          color="primary.contrastText"
          margin={0}
          sx={{ fontSize: { xs: 12, md: 16 } }}
        >
          {text}
        </Typography>
      </Stack>
    </Paper>
  );
};

type CountdownProps = { countDownDate: Date };

const Countdown = ({ countDownDate }: CountdownProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateTime() {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <Stack direction="row" spacing={2}>
      <CountdownBox number={days} text="DAGER" />
      <CountdownBox number={hours} text="TIMER" />
      <CountdownBox number={minutes} text="MINUTTER" />
      <CountdownBox number={seconds} text="SEKUNDER" />
    </Stack>
  );
};

export default Countdown;
