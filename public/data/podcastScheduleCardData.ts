import podcastImage1 from "@/../public/images/shows/podcast/1.jpg";
import podcastImage2 from "@/../public/images/shows/podcast/2.jpg";
import podcastImage3 from "@/../public/images/shows/podcast/3.jpg";
import podcastImage4 from "@/../public/images/shows/podcast/4.jpg";
import { v4 as uuidv4 } from "uuid";

import artistImage1 from "@/../public/images/artist/1.jpg";
import artistImage2 from "@/../public/images/artist/2.jpg";
import artistImage3 from "@/../public/images/artist/3.jpg";
import artistImage4 from "@/../public/images/artist/4.jpg";

const podcastScheduleCardData = [
  {
    id: uuidv4(),
    image: podcastImage1,
    artistImage: artistImage1,
    showName: "Music of Pop",
    artistName: "RJ Janeski",
  },
  {
    id: uuidv4(),
    image: podcastImage2,
    artistImage: artistImage2,
    showName: "Music Podcast",
    artistName: "RJ Pavis",
  },
  {
    id: uuidv4(),
    image: podcastImage3,
    artistImage: artistImage3,
    showName: "Live Music",
    artistName: "RJ Josef",
  },
  {
    id: uuidv4(),
    image: podcastImage4,
    artistImage: artistImage4,
    showName: "News Tech",
    artistName: "RJ Mario",
  },
  {
    id: uuidv4(),
    image: podcastImage2,
    artistImage: artistImage2,
    showName: "Music of Pop",
    artistName: "RJ Janeski",
  },
  {
    id: uuidv4(),
    image: podcastImage1,
    artistImage: artistImage1,
    showName: "Music of Pop",
    artistName: "RJ Janeski",
  },
  {
    id: uuidv4(),
    image: podcastImage3,
    artistImage: artistImage3,
    showName: "Music of Pop",
    artistName: "RJ Janeski",
  },
];

export default podcastScheduleCardData;
