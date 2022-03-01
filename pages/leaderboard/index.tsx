import React, { FormEvent, useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import useSWR from "swr";
import { Participant, Competition, Score } from "models/leaderboardSchema";
import { Box } from "@mui/material";
import JubPage from "components/JubPage";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeaderboardPage: NextPage = () => {
  const { data: participants } = useSWR<Participant[], unknown>(
    "/api/leaderboardAPI/leaderboardMain",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  // const { data: competitions } = useSWR<Competition[], unknown>(
  //   "/api/leaderboardAPI/competition",
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );

  // const router = useRouter();
  // const navigateTo = function (to: string) {
  //   void router.push(to);
  // };

  // const [dropdown, setDropdown] = useState("");
  // const [chosenComp, setChosenComp] = useState<Competition>({ name: "" });
  // const handleChangeDropdown = (e: SelectChangeEvent) => {
  //   setDropdown(e.target.value);
  //   setChosenComp({ ...chosenComp, name: e.target.value });
  //   navigateTo("/score?_id=" + e.target.value);
  // };

  return (
    <JubPage title="Leaderboard" header="Leaderboard">
      <Box maxWidth="fit-content" margin="auto">
      {/* <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="comp-label">Konkurranse</InputLabel>
          <Select
            labelId="comp-label"
            id="select-comp"
            value={dropdown}
            onChange={handleChangeDropdown}
            label="Konkurranse"
          >
            <MenuItem value="">
              <em>Alle konkurranser</em>
            </MenuItem>
            {competitions?.map(({ name, _id }) => (
              <MenuItem value={_id as string} key={_id as string}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <br></br>
        <TableContainer component={Paper} elevation={2}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell width="500px">Navn</StyledTableCell>
                <StyledTableCell>Poeng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants?.map(({ name, totalScore, _id }, index) => (
                <StyledTableRow key={_id}>
                  <StyledTableCell>
                    {(index + 1).toString() + "."}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {name}
                  </StyledTableCell>
                  <StyledTableCell>{totalScore}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </JubPage>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: 17,
    fontWeight: theme.typography.fontWeightBold,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f7f7f7",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#f2f2f2",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default LeaderboardPage;
