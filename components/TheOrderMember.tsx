import { useState } from "react";
import {
  Card,
  CardActionArea,
  Typography,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Member.module.css";
import CircularImage from "./CircularImage";
import Centered from "./Centered";

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
  top: { md: "50%", xs: "100%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 800, xs: 330 },
  bgcolor: "background.paper",
  border: "1px solid 	#d4af37",
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
    <Typography key={i} sx={{ mt: 5 }}>
      {i}
      <br />
    </Typography>
  ));

  const cardButton = (
    <IconButton
      size="large"
      className={styles.iconButtonStyle}
      onClick={handleClose}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <Card
      variant="outlined"
      className={styles.theOrderCardStyle}
      onClick={handleOpen}
    >
      <CardActionArea>
        <Centered>
          <CircularImage size={110} src={member.profilePic} alt={member.name} />
        </Centered>
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
      <Modal open={open} onClose={handleClose} className={styles.modalStyle}>
        <Box sx={style}>
          {cardButton}
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
