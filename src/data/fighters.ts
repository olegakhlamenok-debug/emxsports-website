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
  rankings?: string[];
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
      "IBF European Middleweight Champion",
      "IBF European Middleweight Champion — 1st Defense",
    ],
    bio: "Latvian standout with explosive combinations and constant forward pressure. Jevgenijs has dominated the middleweight division in Eastern Europe with a perfect 20-0 record, earning him a WBC #4 world ranking. Known for his relentless pressure fighting style and devastating body work, he has stopped 14 of his 20 opponents.",
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
    hometown: "Kyiv, Ukraine",
    nationality: "🇺🇦",
    stance: "Orthodox",
    height: "5'9\"",
    age: 30,
    ranking: "IBF #1 Contender | Welterweight | Mandatory Final Eliminator pending",
    titles: [
      "WBO Youth World Welterweight Champion",
      "WBC Youth World Welterweight Champion",
      "WBA International Welterweight Champion",
      "IBF Inter-Continental Welterweight Champion",
      "WBO International Welterweight Champion",
      "IBF International Welterweight Champion",
    ],
    bio: "Elusive technician with sharp counters and high ring IQ. Karen is one of the most decorated welterweights in the region — a multi-belt champion and two-time challenger for the IBF World Title. His slick defensive skills and precise counterpunching make him a true technician who has tested himself at the highest levels of the sport.",
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
    ranking: "IBF International Champion",
    titles: [
      "IBF International Light Heavyweight Champion",
    ],
    bio: "Riga-based contender with crisp boxing fundamentals and power in both hands. Milans brings an exciting, fan-friendly style to every fight and has staked his claim on the world stage as IBF International Champion. A natural light heavyweight with speed and athleticism, Volkovs has quickly become a crowd favorite at EMX events.",
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
