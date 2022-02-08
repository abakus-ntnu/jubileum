import { Stack, Box, Tooltip, Card, Typography } from "@mui/material";
import Image from "next/image";
import Centered from "./Centered";

const IMAGE_SIZE = 220;

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
  return (
    <Card sx={{ p: 4 }}>
      <Stack
        direction={{ xs: "column", md: `row${reverse ? "-reverse" : ""}` }}
        spacing={8}
        justifyContent="flex-start"
      >
        <Centered
          sx={{
            width: { xs: undefined, md: IMAGE_SIZE },
            flexGrow: 0,
          }}
        >
          <Box
            sx={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
              borderRadius: IMAGE_SIZE / 2,
              overflow: "hidden",
            }}
          >
            <Image
              layout="fixed"
              src={member.profilePic}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              alt={member.name}
            />
          </Box>
        </Centered>
        <Stack
          direction={{ xs: "column", md: `row${reverse ? "-reverse" : ""}` }}
          spacing={8}
          sx={{
            flexGrow: 1,
            width: { xs: undefined, md: 0 },
          }}
        >
          <Box>
            <Typography
              variant="h3"
              marginTop={0}
              marginBottom={2}
              sx={{
                textAlign: { xs: "center", md: reverse ? "right" : "left" },
              }}
            >
              {member.name}
            </Typography>
            <Typography variant="body1" textAlign="justify">
              {member.memberInfo}
            </Typography>
          </Box>
          <Stack
            justifyContent="space-between"
            sx={{ width: { xs: undefined, md: IMAGE_SIZE }, flexShrink: 0 }}
          >
            <Typography textAlign="center">
              <Typography variant="h6">Utnevnt</Typography>
              <Typography variant="body1">{member.appointed}</Typography>
              <Typography variant="h6">Stilling</Typography>
              <Typography variant="body1">{member.position}</Typography>
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2}>
              {member.committee.map((committee) => (
                <Tooltip title={committee} key={committee}>
                  <Box>
                    <Image
                      width={60}
                      height={60}
                      src={`/abakus_${committee}.png`}
                      alt={`${committee} committee`}
                    />
                  </Box>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default HonoraryMember;
