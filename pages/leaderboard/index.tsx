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
        <h1 className={styles.title}></h1>
        <TableContainer className={styles.Table} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Navn</StyledTableCell>
                <StyledTableCell>Poeng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.map((participants, index) => (
                <StyledTableRow key={participants.name}>
                  <StyledTableCellNumber>
                    {"0" + (index + 1).toString() + "."}
                  </StyledTableCellNumber>
                  <StyledTableCell component="th" scope="row">
                    {participants.name}
                  </StyledTableCell>
                  <StyledTableCell>{participants.score}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p className={styles.description}>😎😎😎😎😎😎😎😎😎</p>
      </main>
    </div>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#262626",
    fontSize: 17,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "SoraRegular",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    color: "#000000",
    fontFamily: "SoraRegular",
  },
  divider: {
    // Theme Color, or use css color in quote
    background: "#ffffff",
  },
}));

const StyledTableCellNumber = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    color: "#000000",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    color: theme.palette.common.white,
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
