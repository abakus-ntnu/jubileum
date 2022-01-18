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
const medalDescriptions = [
  {
    medalType: "Formattert",
    medalDesign: "Sølvfinish",
    medalInformation: "Formatert",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje, ikke sort stripe i stoffet",
    medalInformation: "Komitéleder",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "backup",
    medalDesign: "Sølvfinish",
    medalInformation: "backup",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Abakus-leder",
    medalDesign: "Gullfinish av HS-dalje, ikke sort stripe i stoffet",
    medalInformation: "Abakusleder",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Hovedstyret",
    medalDesign: "Sølvfinish, ikke sort stripe i stoffet",
    medalInformation: "Hovedstyret",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Æresmedlem",
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Revystyret",
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Jubileumsdaljer",
    medalDesign: "Who the fuck knows",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Ridderdalje",
    medalDesign: "Rød og gull",
    medalInformation: "Ridderdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/SampleDalje.png",
  },
  {
    medalType: "Linjeleder",
    medalDesign: "Who the fuck knows",
    medalInformation:
      "Linjeleder dalje. Oppbevares av PR, bæres av Abakus-leder og bestilles gjennom linjeleder-forum av Abakus-leder)",
    imageLink: "/SampleDalje.png",
  },
];
export { medalTypes, medalDescriptions };
