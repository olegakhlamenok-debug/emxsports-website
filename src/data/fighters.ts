export interface Fighter {
  slug: string;
  name: string;
  nickname: string;
  weightClass: string;
  record: { wins: number; losses: number; draws: number };
  kos: number;
  hometown: string;
  nationality: string;
  stance: string;
  height: string;
  age: number;
  ranking: string;
  titles?: string[];
  bio: string;
  instagram: string;
  image: string;
  imageAction: string;
  gallery: string[];
}

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const fighters: Fighter[] = [
  {
    slug: "jevgenijs-aleksejevs",
    name: "Jevgenijs Aleksejevs",
    nickname: "The Hurricane",
    weightClass: "Middleweight",
    record: { wins: 20, losses: 0, draws: 0 },
    kos: 14,
    hometown: "Riga, Latvia",
    nationality: "🇱🇻",
    stance: "Orthodox",
    height: "5'11\"",
    age: 28,
    ranking: "WBC #4",
    titles: [
      "IBO European Middleweight Champion",
      "IBF European Middleweight Champion (won & defended)",
    ],
    bio: "Latvian standout with explosive combinations and constant forward pressure. Jevgenijs has dominated the middleweight division in Eastern Europe with a perfect 20-0 record, earning him a WBC #4 world ranking. Known for his relentless pressure fighting style and devastating body work, he has stopped 14 of his 20 opponents. His upcoming bout against Damiano Falcinelli for the WBC International Title represents his biggest test to date.",
    instagram: "https://www.instagram.com/ealekseev/",
    image: `${bp}/images/fighters/jevgenijs-aleksejevs.jpg`,
    imageAction: `${bp}/images/fighters/jevgenijs-aleksejevs-event.jpg`,
    gallery: [
      `${bp}/images/fighters/jevgenijs-aleksejevs-event.jpg`,
      `${bp}/images/aleksejevs-gallery-new.jpg`,
      `${bp}/images/gallery/4.jpg`,
    ],
  },
  {
    slug: "karen-chukhadzhian",
    name: "Karen Chukhadzhian",
    nickname: "",
    weightClass: "Welterweight",
    record: { wins: 26, losses: 3, draws: 0 },
    kos: 11,
    hometown: "Yerevan, Armenia",
    nationality: "🇦🇲",
    stance: "Orthodox",
    height: "5'9\"",
    age: 30,
    ranking: "2× IBF World Title Challenger",
    titles: [
      "WBO Youth World Champion (won & defended)",
      "WBC Youth World Champion (won & defended)",
      "WBA International Champion",
      "IBF Inter-Continental Champion (won & defended)",
      "WBO International Champion",
      "IBF International Champion",
    ],
    bio: "Elusive technician with sharp counters and high ring IQ. Karen is one of the most decorated welterweights in the region — a multi-belt champion and two-time challenger for the IBF World Title. His collection of titles across WBO, WBC, WBA, and IBF organizations speaks to the breadth of his excellence. With slick defensive skills and precise counterpunching, Chukhadzhian is a true technician who has tested himself at the highest levels of the sport.",
    instagram: "https://www.instagram.com/karen_chukhadzhian/",
    image: `${bp}/images/fighters/karen-chukhadzhian.jpg`,
    imageAction: `${bp}/images/fighters/karen-chukhadzhian.jpg`,
    gallery: [
      `${bp}/images/gallery/5.jpg`,
      `${bp}/images/gallery/6.jpg`,
      `${bp}/images/gallery/3.jpg`,
    ],
  },
  {
    slug: "milans-volkovs",
    name: "Milans Volkovs",
    nickname: "Big Bad Wolf",
    weightClass: "Light Heavyweight",
    record: { wins: 12, losses: 4, draws: 2 },
    kos: 7,
    hometown: "Riga, Latvia",
    nationality: "🇱🇻",
    stance: "Southpaw",
    height: "6'1\"",
    age: 26,
    ranking: "",
    titles: [
      "IBF International Champion",
    ],
    bio: "Riga-based contender with crisp boxing fundamentals and power in both hands. Milans brings an exciting, fan-friendly style to every fight and has already staked his claim on the world stage as IBF International Champion. A natural light heavyweight with speed and athleticism beyond his weight class, Volkovs has quickly become a crowd favorite at EMX events. His combination of technical skill and raw power makes him a dangerous opponent for anyone in the division.",
    instagram: "https://www.instagram.com/milansvolkovs/",
    image: `${bp}/images/fighters/milans-volkovs.jpg`,
    imageAction: `${bp}/images/fighters/milans-volkovs.jpg`,
    gallery: [
      `${bp}/images/volkovs-gallery-new.jpg`,
      `${bp}/images/gallery/1.jpg`,
      `${bp}/images/best-moments/2.jpg`,
    ],
  },
];

export function getFighterBySlug(slug: string): Fighter | undefined {
  return fighters.find((f) => f.slug === slug);
}
