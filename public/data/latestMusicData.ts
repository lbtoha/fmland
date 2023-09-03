import musicImage1 from "@/../public/images/shows/player/s1.jpg";
import musicImage2 from "@/../public/images/shows/player/s2.jpg";
import musicImage3 from "@/../public/images/shows/player/s3.jpg";
import musicImage4 from "@/../public/images/shows/player/s4.jpg";
import musicImage5 from "@/../public/images/shows/player/s5.jpg";
import musicImage6 from "@/../public/images/shows/player/s6.jpg";
import { v4 as uuidv4 } from "uuid";

const latestMusicData = [
  {
    id: uuidv4(),
    image: musicImage1,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: musicImage2,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: musicImage3,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: musicImage4,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: musicImage5,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
  {
    id: uuidv4(),
    image: musicImage6,
    title: "The Love Love",
    audio: "/audio/main.mp3",
  },
];

export default latestMusicData;
