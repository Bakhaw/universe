import DuragGG from "../assets/images/work/durag-gg.png";
import GeniusImg from "../assets/images/work/genius.png";
import GlobeImg from "../assets/images/work/globe.png";
import NitroStuffsImg from "../assets/images/work/nitrostuffs.png";
import RickAndMortyImg from "../assets/images/work/rickandmorty.png";
import ServicesPersoImg from "../assets/images/work/servicesperso.png";
import TwitchImg from "../assets/images/work/twitch.png";
import UnsplashImg from "../assets/images/work/unsplash.png";
import VPGImg from "../assets/images/work/vpg.png";
import YoutubeImg from "../assets/images/work/youtube.png";

export const workList = [
  {
    date: "2020",
    description: "All the best stuffs in one place",
    img: {
      alt: "Nitro Stuffs app",
      src: NitroStuffsImg,
    },
    links: ["nitro-stuffs-front", "fh-nitrostuffs"],
    tags: [
      "react",
      "hooks",
      "context api",
      "material-ui",
      "node js",
      "express",
      "mongodb",
    ],
    title: "Nitro Stuffs",
  },
  {
    date: "2019",
    description: "Find the lyrics",
    img: {
      alt: "Genius app",
      src: GeniusImg,
    },
    links: ["genius", "fh-genius"],
    tags: ["react", "context api", "material-ui", "genius api"],
    title: "Genius",
  },
  {
    date: "2019",
    description: "For the fans",
    img: {
      alt: "Rick and Morty app",
      src: RickAndMortyImg,
    },
    links: ["rickandmorty", "fh-rickandmorty"],
    tags: ["react", "hooks", "context api", "material-ui", "rickandmorty api"],
    title: "Rick & Morty",
  },
  {
    date: "2019",
    description: "Pinky remake !",
    img: {
      alt: "Youtube remake app",
      src: YoutubeImg,
    },
    links: ["youtube", "fh-youtube"],
    tags: [
      "react",
      "hooks",
      "context api",
      "material-ui",
      "styled-components",
      "youtube-api",
    ],
    title: "YouTube",
  },
  {
    date: "2019",
    description: "Big gamer",
    img: {
      alt: "Twitch remake app",
      src: TwitchImg,
    },
    links: ["twitch", "fh-twitch"],
    tags: [
      "react",
      "hooks",
      "context api",
      "material-ui",
      "styled-components",
      "twitch api",
      "node js",
      "express",
    ],
    title: "Twitch",
  },
  {
    date: "2019",
    description: "League of Legends stats",
    img: {
      alt: "Durag.GG app",
      src: DuragGG,
    },
    links: ["durag-gg", "fh-durag-gg"],
    tags: [
      "react",
      "hooks",
      "context api",
      "material-ui",
      "youtube api",
      "riotgames api",
    ],
    title: "Durag.GG",
  },
  {
    date: "2019",
    description: "High quality images",
    img: {
      alt: "Unsplash remake app",
      src: UnsplashImg,
    },
    links: ["unsplash", "fh-unsplash"],
    tags: [
      "react",
      "context api",
      "material-ui",
      "styled-components",
      "unsplash api",
    ],
    title: "Unsplash",
  },
  {
    date: "2019",
    description: "Travel !",
    img: {
      alt: "Travel app",
      src: GlobeImg,
    },
    links: ["globe", "fh-globe"],
    tags: ["react", "material-ui", "styled-components", "three js"],
    title: "Globe",
  },
  {
    date: "2021",
    description: "Association",
    img: {
      alt: "Services Perso",
      src: ServicesPersoImg,
    },
    links: ["https://servicesperso.fr/"],
    tags: ["wordpress", "OVH"],
    title: "Services Perso",
  },
  {
    date: "2020",
    description: "E-sport FIFA Platform",
    img: {
      alt: "Virtual Pro Gaming",
      src: VPGImg,
    },
    links: ["https://virtualprogaming.com/"],
    tags: ["react", "typescript", "hooks", "api"],
    title: "Virtual Pro Gaming",
  },
];
