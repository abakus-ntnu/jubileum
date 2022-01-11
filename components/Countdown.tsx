import React, { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import styles from "../styles/Countdown.module.css";

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
      md: "100px",
      xs: "63px",
    },
  };
  const drawerFontSize = {
    fontSize: {
      md: "60px",
      xs: "30px",
    },
  };
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(days)}
          </Box>
          <p className={styles.p}>DAGER</p>
        </Box>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(hours)}
          </Box>
          <p className={styles.p}>TIMER</p>
        </Box>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(minutes)}
          </Box>
          <p className={styles.p}>MINUTTER</p>
        </Box>
        <Box sx={drawerWidth} className={styles.box}>
          <Box sx={drawerFontSize} className={styles.integer}>
            {adjustDate(seconds)}
          </Box>
          <p className={styles.p}>SEKUNDER</p>
        </Box>
      </Stack>
    </div>
  );
};

export default Countdown;
