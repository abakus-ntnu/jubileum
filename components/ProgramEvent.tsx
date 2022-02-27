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
import { useState } from "react";

const ProgramEvent = ({ program }: { program: JubEvent }) => {
  moment.locale("nb");
  const [expanded, setExpanded] = useState<boolean>(!!program.defaultExpanded);

  const getRegistrationText = (): string => {
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
    <Card
      sx={{
        maxWidth: 1200,
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
          <Typography variant="h4">
            {program.title
              .replace("Jubileumsuke - ", "")
              .replace("Jubileum - ", "")}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              flexShrink: 0,
            }}
          >
            {moment(program.startTime).format("HH:mm") +
              " - " +
              moment(program.endTime).format("HH:mm")}
          </Typography>
        </Stack>

        <Box
          sx={{
            whiteSpace: "pre-line",
            fontFamily: "Sora,Arial,sans-serif",
            maxHeight: expanded ? undefined : 130,
            maskImage: expanded
              ? undefined
              : "linear-gradient(180deg, #000 60%, transparent)",
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(program.information),
          }}
        />
        {expanded || (
          <Button onClick={() => setExpanded(true)} sx={{ width: 1 }}>
            les mer
          </Button>
        )}
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
          <Typography>{getRegistrationText()}</Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProgramEvent;
