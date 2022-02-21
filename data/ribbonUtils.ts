//Note: Design and Information have been deemed irrelevant
//Note: some medals have the filterTag "unlisted"
const medalDescriptions = [
  {
    medalType: "Komitéleder Arrkom",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Arrkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder backup",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/backup_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder Bedkom",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Bedkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder Fagkom",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Fagkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder Koskom",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Koskom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder LaBamba",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/LaBamba_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder PR",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/PR_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder readme",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/readme_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitéleder Webkom",
    medalDesign: "Gullfinish av komitédalje",
    medalInformation: "Komitéleder",
    imageLink: "/Ribbons/Webkom_gull.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem Arrkom",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Arrkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem backup",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/backup_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem Bedkom",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Bedkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem Fagkom",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Fagkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem Koskom",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Koskom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem LaBamba",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/LaBamba_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem PR",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/PR_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem readme",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/readme_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Komitémedlem Webkom",
    medalDesign: "Sølvfinish",
    medalInformation: "Komiteene",
    imageLink: "/Ribbons/Webkom_sølv.png",
    filterTag: "abakom",
  },
  {
    medalType: "Abakus 40-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/40jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Abakus 35-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/35jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Abakus 30-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/30jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Abakus 25-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/25jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Abakus 20-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/20jub.png",
    filterTag: "jubileum",
  },
  {
    medalType: "LaBamba 35-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba35.png",
    filterTag: "jubileum",
  },
  {
    medalType: "LaBamba 30-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba30.png",
    filterTag: "jubileum",
  },
  {
    medalType: "LaBamba 25-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba25.png",
    filterTag: "jubileum",
  },
  {
    medalType: "LaBamba 20-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/LaBamba20.png",
    filterTag: "jubileum",
  },
  {
    medalType: "readme 20-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/readme20.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Revyen 5-års jubileum",
    medalDesign: " ",
    medalInformation:
      "Jubileumsdaljer (Abakus, readme eller LaBamba har jubileum)",
    imageLink: "/Ribbons/Revyen5.png",
    filterTag: "jubileum",
  },
  {
    medalType: "Ordenstegn Ridder",
    medalDesign: "Rød og Gull",
    medalInformation: "Ridderdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_ridder.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Ordenstegn Kommandør",
    medalDesign: "Rød og Gull",
    medalInformation: "Kommandørdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_kommandør.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Ordenstegn Storkors",
    medalDesign: "Rød og Gull",
    medalInformation: "Ordensdalje. Oppbevares av PR, betalt av ordenen",
    imageLink: "/Ribbons/Ordenstegn_storkors.png",
    filterTag: "ordenen",
  },
  {
    medalType: "Formatert",
    medalDesign: "Sølvfinish",
    medalInformation: "Formatert",
    imageLink: "/Ribbons/Formatert.png",
    filterTag: "abakus",
  },
  {
    medalType: "Æresmedlem",
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/Ribbons/Æresmedlem.png",
    filterTag: "abakus",
  },
  {
    medalType: "Æresmedlem (Gammel)",
    medalDesign: "Bronse",
    medalInformation: "Æresmedlemmer",
    imageLink: "/Ribbons/Æresmedlem_gammel.png",
    filterTag: "abakus",
  },
  {
    medalType: "Abakus-pin",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/AbakusPin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Årets Komitémedlem",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Årets_komitémedlem_pin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Korona-pin",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Koronapin.png",
    filterTag: "abakus",
  },
  {
    medalType: "Abakus-leder",
    medalDesign: "Gullfinish av HS-dalje, ikke sort stripe i stoffet",
    medalInformation: "Abakusleder",
    imageLink: "/Ribbons/Abakusleder.png",
    filterTag: "styre",
  },
  {
    medalType: "Hovedstyret",
    medalDesign: "Sølvfinish, ikke sort stripe i stoffet",
    medalInformation: "Hovedstyret",
    imageLink: "/Ribbons/HS.png",
    filterTag: "styre",
  },
  {
    medalType: "Revystyret",
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/Ribbons/Revyen.png",
    filterTag: "styre",
  },
  {
    medalType: "Revystyret Gammel",
    medalDesign: "Sølv",
    medalInformation: "Revystyret",
    imageLink: "/Ribbons/Revystyret_gammel_sølv.png",
    filterTag: "unlisted",
  },
  {
    medalType: "Fondstyret",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Fondstyret.png",
    filterTag: "styre",
  },
  {
    medalType: "Første Revy",
    medalDesign: " ",
    medalInformation: " ",
    imageLink: "/Ribbons/Revy_pin_første_revy.png",
    filterTag: "unlisted",
  },
  {
    medalType: "Abakus-leder (Gammel)",
    medalDesign: " ",
    medalInformation: "Abakusleder",
    imageLink: "/Ribbons/Abakusleder_gammel.png",
    filterTag: "unlisted",
  },
];
export { medalDescriptions };
