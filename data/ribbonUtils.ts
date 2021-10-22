const medalTypes = {
  formatted: "Formattert",
  comitteeLeader: "Komitéleder",
  comittee: "Komitémedlem",
  backup: "backup",
  abakusLeader: "Abakus-leder",
  hs: "Hovedstyret",
  honorary: "Æresmedlem",
  revueBoard: "Revystyret",
  anniversary: "Jubileumsdaljer",
  knight: "Ridderdalje",
  lineLeader: "Linjeleder ",
};

//TODO: Fill descriptions
const medalDescriptions = {
  [medalTypes.formatted]: {
    medalDesign: "Sølvfinish",
    medalInformation: "Formatert",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.comitteeLeader]: {
    medalDesign: "Gullfinish av komitédalje, ikke sort stripe i stoffet",
    medalInformation: "Komitéleder",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.comittee]: {
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.backup]: {
    medalDesign: "Sølvfinish",
    medalInformation: "backup",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.abakusLeader]: {
    medalDesign: "Gullfinish av HS-dalje, ikke sort stripe i stoffet",
    medalInformation: "Abakusleder",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.hs]: {
    medalDesign: "Sølvfinish, ikke sort stripe i stoffet",
    medalInformation: "Hovedstyret",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.honorary]: {
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.revueBoard]: {
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.anniversary]: {
    medalDesign: "Who the fuck knows",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.knight]: {
    medalDesign: "Rød og gull",
    medalInformation: "Ridderdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/SampleDalje.png",
  },
  [medalTypes.lineLeader]: {
    medalDesign: "Who the fuck knows",
    medalInformation:
      "Linjeleder dalje. Oppbevares av PR, bæres av Abakus-leder og bestilles gjennom linjeleder-forum av Abakus-leder)",
    imageLink: "/SampleDalje.png",
  },
};
export { medalTypes, medalDescriptions };
