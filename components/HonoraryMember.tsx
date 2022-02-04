import { Stack, Box, Tooltip } from "@mui/material";
import styles from "../styles/Member.module.css";
import { isMobile } from "react-device-detect";
import Image from "next/image";

export interface MemberProps {
  name: string;
  memberInfo: string;
  profilePic: string;
  appointed: string;
  position: string;
  committee: string[];
}

const HonoraryMember = ({
  member,
  reverse,
}: {
  reverse: boolean;
  member: MemberProps;
}) => {
  const displayCommittee = member.committee.map((comittee) => (
    <Box key={comittee}>
      <Tooltip title={`${comittee}`}>
        <div className={styles.img}>
          <Image
            width={60}
            height={60}
            src={`/abakus_${comittee}.png`}
            alt={`${comittee} committee`}
          />
        </div>
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
        direction={`row${reverse ? "-reverse" : ""}`}
        spacing={10}
        justifyContent="flex-start"
        className={styles.stackStyle}
      >
        <div className={styles.img}>
          <Image
            layout="fixed"
            src={member.profilePic}
            width={180}
            height={180}
            alt={`${member.name}`}
          />
        </div>
        <Box className={styles.textBox}>
          <h1
            className={styles.titleSize}
            style={{ textAlign: reverse ? "right" : "left" }}
          >
            {member.name}
          </h1>
          {isMobile && displayRole}
          <p className={styles.text}>{member.memberInfo}</p>
        </Box>
        {!isMobile && displayRole}
        <p />
      </Stack>
      <hr className={styles.verticalLine} />
    </div>
  );
};

export default HonoraryMember;
