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
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { Participant } from "models/leaderboardSchema";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeaderboardPage: NextPage = () => {
  const { data: participants, error } = useSWR<Participant[], unknown>(
    "/api/leaderboardAPI/leaderboardMain",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );
  const router = useRouter();
  const navigateTo = function (to: string) {
    router.push(to);
  };

  return (
    <div className={styles.container}>
      <Header title="Leaderboard" />
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Leaderboard</h1>
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
              {participants &&
                participants.map(({ name, totalScore, _id }, index) => (
                  <StyledTableRow key={name}>
                    <StyledTableCellNumber>
                      {(index + 1).toString() + "."}
                    </StyledTableCellNumber>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      //onClick={() => navigateTo("/participant?_id="+_id)}
                    >
                      {name}
                    </StyledTableCell>
                    <StyledTableCellNumber>{totalScore}</StyledTableCellNumber>
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
    backgroundColor: "#eb4034",
    fontSize: 17,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "SoraRegular",
    minWidth: 100,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    color: "#000000",
    fontFamily: "SoraRegular",
    minWidth: 400,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: "#ffffff",
  },
  [theme.breakpoints.down("md")]: {
    [`&.${tableCellClasses.body}`]: {
      minWidth: 300,
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${tableCellClasses.body}`]: {
      minWidth: 0,
    },
    [`&.${tableCellClasses.head}`]: {
      minWidth: 0,
    },
  },
}));

const StyledTableCellNumber = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    color: "#000000",
    fontFamily: "SoraRegular",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: 0,
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
  [theme.breakpoints.down("md")]: {
    minWidth: 0,
  },
}));

export default LeaderboardPage;
