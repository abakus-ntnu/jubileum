import React, {useState, useEffect} from "react";
import {Stack,Divider, Box} from "@mui/material";
import styles from '../styles/Home.module.css'

const adjustDate = (date:number) => {
    return date < 10 ? `0${date}` : date;
};

type CountdownProps = {countDownDate:Date}
const Countdown = ({countDownDate}: CountdownProps) => {
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate.getTime() - now;
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            <Stack
                direction="row"
                spacing={2}
            >
                <Box sx={{ textAlign: 'center',width: '150px',height: "140px" }}>
                    <p style={{fontSize: "75px",marginTop:"0", marginBottom: "0"}}>{adjustDate(days)}</p>
                    <p>DAYS</p>
                </Box>
                <span className={styles.vertical} style={{bottom: "50px"}}></span>
                <Box sx={{ textAlign: 'center',width: '150px',height: "140px"  }}>
                    <p style={{fontSize: "75px", marginTop: "0", marginBottom: "0"}}>{adjustDate(hours)}</p>
                    <p>HOURS</p>
                </Box>
                <span className={styles.vertical} style={{bottom: "50px"}}></span>
                <Box sx={{  textAlign: 'center',width: '150px',height: "140px"  }}>
                    <p style={{fontSize: "75px", marginTop: "0", marginBottom: "0"}}>{adjustDate(minutes)}</p>
                    <p>MINUTES</p>
                </Box>
                <span className={styles.vertical} style={{bottom: "50px"}}></span>
                <Box sx={{ textAlign: 'center',width: '150px',height: "140px"  }}>
                    <p style={{fontSize: "75px", marginTop: "0", marginBottom: "0"}}>{adjustDate(seconds)}</p>
                    <p>SECONDS</p>
                </Box>
            </Stack>
        </div>
    );
};


export default Countdown;