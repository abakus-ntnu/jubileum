export interface MerchItem {
  title: string;
  description: string;
  buyLink?: string;
  buyInfo?: string;
  image: string;
}

export const merchItems: MerchItem[] = [
  {
    title: "Kortstokk",
    description:
      "Kul kortstokk med masse abakus-bilder og 45-års logoen på baksiden!",
    buyLink: "https://www.abakus.no",
    image: "/AndersNordbø.jpg",
  },
  {
    title: "Glass",
    description: "Glass med 45-års jubileum logoen på!",
    buyLink: "https://www.abakus.no",
    image: "/AndersNordbø.jpg",
  },
  {
    title: "Kuleramme",
    description:
      "Tror ikke dette er en ekte ting, men hvis det var det hadde jeg kjøpt en!",
    buyInfo: "Kjøp den på kontoret!",
    image: "/AndersNordbø.jpg",
  },
  {
    title: "Daljen?",
    description:
      "Idk om den skal stå her, men jeg kommer ikke på noe mer merch!",
    buyLink: "https://www.abakus.no",
    image: "/AndersNordbø.jpg",
  },
  {
    title: "Noe annet",
    description: "Skikkelig kul merch ting og sånt!",
    buyLink: "https://www.abakus.no",
    image: "/AndersNordbø.jpg",
  },
];
