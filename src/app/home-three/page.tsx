import Banner from "@/components/pages/homeThree/Banner";
import Experience from "@/components/pages/homeThree/Experience";
import LatestMusic from "@/components/pages/homeThree/LatestMusic";
import LifeEventMusic from "@/components/pages/homeThree/LifeEventMusic";
import LivePodcast from "@/components/pages/homeThree/LivePodcast";
import MusicShow from "@/components/pages/homeThree/MusicShow";
import Rj from "@/components/pages/homeThree/Rj";
import SubscribeNewsLetter from "@/components/pages/homeThree/SubscribeNewsLetter";
import Testimonial from "@/components/pages/homeThree/Testimonial";
import { Metadata } from "next";
import Podcast from "../../components/pages/homeThree/Podcast";

export const metadata: Metadata = {
  title: "Home Three | Online Radio NextJs Template",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <Banner />
      <Podcast />
      <MusicShow />
      <LivePodcast />
      <Experience />
      <LatestMusic />
      <LifeEventMusic />
      <Rj />
      <Testimonial />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
