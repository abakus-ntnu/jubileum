//Note: Design and Information have been deemed irrelevant
//Note: some medals have the filterTag "unlisted"
const medalDescriptions = [
  {
    medalType: "Arrkom",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Arrkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "backup",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/backup_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Bedkom",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Bedkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Fagkom",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Fagkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Koskom",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Koskom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "LaBamba",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/LaBamba_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "PR",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/PR_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "readme",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/readme_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Webkom",
    medalInfo: "Komitéleder",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Webkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Arrkom",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Arrkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "backup",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/backup_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Bedkom",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Bedkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Fagkom",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Fagkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Koskom",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Koskom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "LaBamba",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/LaBamba_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "PR",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/PR_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "readme",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/readme_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Webkom",
    medalInfo: "Komitémedlem",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Webkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "45-års jubileum",
    medalInfo: "Abakus - Jubileumsstyret",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/45jub_gull.png",
    filterTag: "unlisted",
  },
  {
    medalType: "45-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/45jub_sølv.png",
    filterTag: "unlisted",
  },
  {
    medalType: "40-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/40jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "35-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/35jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "30-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/30jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "25-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/25jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "20-års jubileum",
    medalInfo: "Abakus",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/20jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "35-års jubileum",
    medalInfo: "LaBamba",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba35.png",
    filterTag: "jubileum",
  },
  {
    medalType: "30-års jubileum",
    medalInfo: "LaBamba",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba30.png",
    filterTag: "jubileum",
  },
  {
    medalType: "25-års jubileum",
    medalInfo: "LaBamba",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba25.png",
    filterTag: "jubileum",
  },
  {
    medalType: "20-års jubileum",
    medalInfo: "LaBamba",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba20.png",
    filterTag: "jubileum",
  },
  {
    medalType: "20-års jubileum",
    medalInfo: "readme",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/readme20.png",
    filterTag: "jubileum",
  },
  {
    medalType: "5-års jubileum",
    medalInfo: "Revyen",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/Revyen5.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Ordenstegn",
    medalInfo: "Kommandør",
    medalDesign: "Rød og Gull",
    medalInformation: "Ridderdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_ridder.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Ordenstegn",
    medalInfo: "Ridder",
    medalDesign: "Rød og Gull",
    medalInformation: "Kommandørdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_kommandør.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Ordenstegn",
    medalInfo: "Storkors",
    medalDesign: "Rød og Gull",
    medalInformation: "Ordensdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_storkors.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Formatert",
    medalInfo: "",
    medalDesign: "Sølvfinish",
    medalInformation: "Formatert",
    imageLink: "/Ribbons/Formatert.png",
    filterTag: "abakus",
  },
  {
    medalType: "Æresmedlem",
    medalInfo: "",
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/Ribbons/Æresmedlem.png",
    filterTag: "abakus",
  },
  {
    medalType: "Æresmedlem",
    medalInfo: "(gammel)",
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/Ribbons/Æresmedlem_gammel.png",
    filterTag: "abakus",
  },
  {
    medalType: "Abakus-pin",
    medalInfo: "",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/AbakusPin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Årets komitémedlem",
    medalInfo: "",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Årets_komitémedlem_pin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Korona-pin",
    medalInfo: "",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Koronapin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Abakus-leder",
    medalInfo: "",
    medalDesign: "Gullfinish av HS-dalje, ikke sort stripe i stoffet",
    medalInformation: "Abakusleder",
    imageLink: "/Ribbons/Abakusleder.png",
    filterTag: "styre",
  },
  {
    medalType: "Hovedstyret",
    medalInfo: "",
    medalDesign: "Sølvfinish, ikke sort stripe i stoffet",
    medalInformation: "Hovedstyret",
    imageLink: "/Ribbons/HS.png",
    filterTag: "styre",
  },
  {
    medalType: "Revystyret",
    medalInfo: "",
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/Ribbons/Revyen.png",
    filterTag: "styre",
  },
  {
    medalType: "Revystyret",
    medalInfo: "(gammel)",
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/Ribbons/Revystyret_gammel_sølv.png",
    filterTag: "unlisted",
  },
  {
    medalType: "Fondstyret",
    medalInfo: "",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Fondstyret.png",
    filterTag: "styre",
  },
  {
    medalType: "Første revy",
    medalInfo: "",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Revy_pin_første_revy.png",
    filterTag: "unlisted",
  },
  {
    medalType: "Abakus-leder",
    medalInfo: "(gammel)",
    medalDesign: " ",
    medalInformation: "Abakusleder",
    imageLink: "/Ribbons/Abakusleder_gammel.png",
    filterTag: "unlisted",
  },
];
export { medalDescriptions };
