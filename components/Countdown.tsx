import React, { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import styles from "../components/Countdown.module.css";

const adjustDate = (date: number) => {
  return date < 10 ? `0${date}` : date;
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

  const drawerWidth = {
    width: {
      md: "120px",
      xs: "63px",
    },
  };
  const drawerFontSize = {
    fontSize: {
      md: "75px",
      xs: "50px",
    },
  };
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(days)}
          </Box>
          <p>DAYS</p>
        </Box>
        <span className={styles.vertical}></span>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(hours)}
          </Box>
          <p>HOURS</p>
        </Box>
        <span className={styles.vertical}></span>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(minutes)}
          </Box>
          <p>MINUTES</p>
        </Box>
        <span className={styles.vertical}></span>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(seconds)}
          </Box>
          <p>SECONDS</p>
        </Box>
      </Stack>
    </div>
  );
};

export default Countdown;
