import { useState } from "react";
import {
  Card,
  CardActionArea,
  Typography,
  Modal,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircularImage from "./CircularImage";
import Centered from "./Centered";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export interface MemberProps {
  appointed: number;
  grade: string;
  name: string;
  title: string;
  profilePic: string;
  info: string[];
}

const modalStyle: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "90vw",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: 24,
  p: 4,
};

const TheOrderMember = ({
  member,
  sx,
}: {
  member: MemberProps;
  sx?: SxProps<Theme>;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open && setOpen(true);
  };

  const handleClose = () => {
    open && setOpen(false);
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: { xs: 300, sm: 350 }, height: 1, ...sx }}
      onClick={handleOpen}
    >
      <CardActionArea sx={{ height: 1, p: 1.5 }}>
        <Typography height={1} textAlign="center">
          <Stack sx={{ height: 1 }} justifyContent="space-between">
            <Centered>
              <CircularImage
                size={110}
                src={member.profilePic}
                alt={member.name}
                sx={{ m: 2 }}
              />
            </Centered>
            <Typography variant="h5" gutterBottom>
              {member.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {member.title}
            </Typography>
            <Typography variant="caption">{member.grade}</Typography>
          </Stack>
        </Typography>
      </CardActionArea>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={modalStyle}>
          <IconButton
            size="large"
            sx={{ position: "absolute", right: 30, top: 30 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Om {member.name}
          </Typography>
          <CircularImage
            size={200}
            src={member.profilePic}
            alt={member.name}
            sx={{ float: "right", mt: 6, ml: 2 }}
          />
          {member.info.map((infoParagraph, i) => (
            <Typography key={i} sx={{ mt: 5 }}>
              {infoParagraph}
            </Typography>
          ))}
        </Paper>
      </Modal>
    </Card>
  );
};

export default TheOrderMember;
