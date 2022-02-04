import { members } from "data/membersUtils";
import HonoraryMember from "./HonoraryMember";
import React from "react";

const HonoraryMembers = () => {
  members.sort((m1, m2) => m2.appointed.localeCompare(m1.appointed));

  return (
    <>
      {members.map((member, index) => (
        <HonoraryMember
          key={member.name}
          member={member}
          reverse={index % 2 != 0}
        />
      ))}
    </>
  );
};

export default HonoraryMembers;
