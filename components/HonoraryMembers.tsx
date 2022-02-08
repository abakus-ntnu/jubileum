import { members } from "data/membersUtils";
import HonoraryMember from "./HonoraryMember";
import React from "react";
import { Stack } from "@mui/material";

const HonoraryMembers = () => {
  members.sort((m1, m2) => m2.appointed.localeCompare(m1.appointed));

  return (
    <Stack spacing={3}>
      {members.map((member, index) => (
        <HonoraryMember
          key={member.name}
          member={member}
          reverse={index % 2 != 0}
        />
      ))}
    </Stack>
  );
};

export default HonoraryMembers;
