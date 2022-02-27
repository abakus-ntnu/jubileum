/*
This is the components for the Jubileum program.
*/

import {
  Card,
  CardContent,
  Typography,
  Link,
  Button,
  CardActions,
  Stack,
  Box,
} from "@mui/material";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { JubEvent, JubEventRegistration } from "../data/programUtils";
import moment from "moment";
import "moment/locale/nb";

const ProgramComponent = ({ program }: { program: JubEvent }) => {
  moment.locale("nb");

  const getRegitrationText = (): string => {
    switch (program.registrationType) {
      case "OPEN": {
        return "Åpent arrangement";
      }
      case "NORMAL": {
        const registration = program.registration as JubEventRegistration;

        return `${registration.registrations}/${registration.capacity} ${
          registration.waitingList != 0 ? `(+${registration.waitingList}) ` : ""
        } påmeldte`;
      }
      case "INFINITE": {
        const registration = program.registration as JubEventRegistration;

        return `${registration.registrations} påmeldte`;
      }
      default: {
        return "Påmelding TBA";
      }
    }
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 1200,
          m: { xs: 2, md: 7 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src={program.banner}
          alt={program.title}
          width={"1200"}
          height={"360"}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontSize: { xs: 25, md: 43 },
              }}
            >
              {program.title
                .replace("Jubileumsuke - ", "")
                .replace("Jubileum - ", "")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 22, md: 30 },
                flexShrink: 0,
              }}
            >
              {moment(program.startTime).format("dddd HH:mm") +
                " - " +
                moment(program.endTime).format("HH:mm")}
            </Typography>
          </Stack>

          <Box
            sx={{
              whiteSpace: "pre-line",
              fontFamily: "Sora,Arial,sans-serif",
            }}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(program.information),
            }}
          />
        </CardContent>
        <CardActions>
          <Stack direction="row" justifyContent="space-between" width={1}>
            <Link
              component={Button}
              href={program.url}
              target="_blank"
              rel="noopener"
              sx={{ textDecoration: "none" }}
            >
              Abakus.no
            </Link>
            <Typography>{getRegitrationText()}</Typography>
          </Stack>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProgramComponent;
