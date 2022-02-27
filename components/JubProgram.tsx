import { Grid, Stack, Typography } from "@mui/material";
import ProgramEvent from "./ProgramEvent";
import { JubEvent } from "../data/programUtils";

export interface JubDay {
  events: JubEvent[];
  title: string;
}

const ProgramDay = ({ events, title }: JubDay) => {
  return (
    <>
      <Typography gutterBottom variant="h4" textAlign="center">
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        {events.map((event) => (
          <Grid item xs={12} md={6} key={event.url}>
            <ProgramEvent program={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

interface IProps {
  jubDays: JubDay[];
}

const JubProgram = ({ jubDays }: IProps) => {
  return (
    <Stack>
      {jubDays && jubDays.map((day) => <ProgramDay key={day.title} {...day} />)}
    </Stack>
  );
};

export default JubProgram;
