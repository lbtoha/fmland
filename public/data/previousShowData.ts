import previousImage1 from "@/../public/images/shows/previous/1.jpg";
import previousImage2 from "@/../public/images/shows/previous/2.jpg";
import previousImage3 from "@/../public/images/shows/previous/3.jpg";
import { v4 as uuidv4 } from "uuid";

import artistImage1 from "@/../public/images/artist/1.jpg";
import artistImage2 from "@/../public/images/artist/2.jpg";
import artistImage3 from "@/../public/images/artist/3.jpg";

const previousShowData = [
  {
    id: uuidv4(),
    image: previousImage1,
    artistImage: artistImage1,
    showName: "Life Music",
    artistName: "Rj Movin",
  },
  {
    id: uuidv4(),
    image: previousImage2,
    artistImage: artistImage2,
    showName: "Music Artist previous",
    artistName: "Rj Sonai",
  },
  {
    id: uuidv4(),
    image: previousImage3,
    artistImage: artistImage3,
    showName: "Music World",
    artistName: "Rj Josino",
  },
];

export default previousShowData;
