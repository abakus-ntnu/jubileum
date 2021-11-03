import React from "react";
import { Stack, Box, Tooltip } from "@mui/material";
import styles from "../styles/Member.module.css";
import { isMobile } from "react-device-detect";
import Image from "next/image";

export interface MemberProps {
  name: string;
  key: string;
  memberInfo: string;
  profilePic: string;
  reverse: boolean;
  appointed: string;
  position: string;
  committee: string[];
}

const HonoraryMember = (member: MemberProps) => {
  const displayCommittee = member.committee.map((k) => (
    <Box key={k}>
      <Tooltip title={`${k}`}>
        <Image
          width={60}
          height={60}
          src={`/abakus_${k}.png`}
          alt={`${k} committee`}
        />
      </Tooltip>
    </Box>
  ));
  const displayRole = (
    <Box className={styles.infoBox}>
      <p className={styles.title}>
        <strong>Utnevnt:</strong> {member.appointed}
      </p>
      <p className={styles.title}>
        <strong>Stilling:</strong> {member.position}
      </p>
      <Stack className={styles.roleStyle} direction={"row"} spacing={2}>
        {displayCommittee}
      </Stack>
    </Box>
  );

  return (
    <div>
      <Stack
        direction={`row${member.reverse ? "-reverse" : ""}`}
        spacing={2}
        justifyContent="flex-start"
        className={styles.stackStyle}
      >
        <Image
          src={member.profilePic}
          width={180}
          height={180}
          alt={`${member.name}`}
        />
        <Box className={styles.textBox}>
          <h1
            className={styles.titleSize}
            style={{ textAlign: member.reverse ? "right" : "left" }}
          >
            {member.name}
          </h1>
          {isMobile && displayRole}
          <p className={styles.text}>{member.memberInfo}</p>
        </Box>
        {!isMobile && displayRole}
        <p />
      </Stack>
      <div className={styles.verticleLine} />
    </div>
  );
};

export default HonoraryMember;
