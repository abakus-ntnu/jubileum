import { useState } from "react";
import { Card, CardActionArea, Typography, Modal, Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Member.module.css";

export interface MemberProps {
  appointed: string;
  grade: string;
  name: string;
  title: string;
  profilePic: string;
  info: string[];
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "5px solid 	#DC143C",
  boxShadow: 24,
  p: 4,
} as const;

const TheOrderMember = ({ member }: { member: MemberProps }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open && setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const viewMemberInfo = member.info.map((i) => (
    <Typography key={i} id="modal-modal-description" sx={{ mt: 2 }}>
      {i}
      <br />
    </Typography>
  ));

  return (
    <Card
      variant="outlined"
      className={styles.theOrderCardStyle}
      onClick={handleOpen}
    >
      <CardActionArea>
        <div className={styles.theOrderMemberImgStyle}>
          <Image
            src={member.profilePic}
            width={110}
            height={110}
            layout="fixed"
            alt={"Profile-Picture"}
          />
        </div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.theOrderTypographyStyle}
        >
          {member.name}
        </Typography>
        <Typography
          className={styles.theOrderTypographyStyle}
          variant="body2"
          color="text.secondary"
        >
          {member.title}
        </Typography>

        <h5 className={styles.theOrderh4Style}>{member.grade}</h5>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Info
          </Typography>
          {viewMemberInfo}
        </Box>
      </Modal>
    </Card>
  );
};

export default TheOrderMember;
