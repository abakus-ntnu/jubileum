import React from "react";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useSWR from "swr";
import { Participant } from "models/leaderboardSchema";
import { Box } from "@mui/material";
import JubPage from "components/JubPage";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeaderboardPage: NextPage = () => {
  const { data: participants } = useSWR<Participant[], unknown>(
    "/api/leaderboardAPI/leaderboardMain",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  return (
    <JubPage title="Leaderboard" header="Leaderboard">
      <Box maxWidth="fit-content" margin="auto">
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
                  <StyledTableCell
                    component="th"
                    scope="row"
                    //onClick={() => navigateTo("/participant?_id="+_id)}
                  >
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
