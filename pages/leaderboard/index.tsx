import React from "react";
import type { NextPage } from "next";
import styles from "../../styles/Leaderboard.module.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { participants } from "data/leaderboardUtils";

const LeaderboardPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header title="Leaderboard" />
      <NavBar />

      <main className={styles.main}>
        <h1>Leaderboard :D</h1>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.map((participants, index) => (
                <StyledTableRow key={participants.name}>
                  <StyledTableCellNumber>{index + 1}</StyledTableCellNumber>
                  <StyledTableCell component="th" scope="row">
                    {participants.name}
                  </StyledTableCell>
                  <StyledTableCell>{participants.score}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6e110e",
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableCellNumber = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    color: theme.palette.common.white,
    backgroundColor: "#E21617",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#B21C17",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default LeaderboardPage;
