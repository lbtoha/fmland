import Blog from "@/components/pages/home-1/Blog";
import About from "@/components/pages/homeTwo/About";
import Banner from "@/components/pages/homeTwo/Banner";
import MusicShow from "@/components/pages/homeTwo/MusicShow";
import PodcastSection from "@/components/pages/homeTwo/PodcastSection";
import Rj from "@/components/pages/homeTwo/Rj";
import Testimonial from "@/components/pages/homeTwo/Testimonial";
import UpComingShow from "@/components/pages/homeTwo/UpComingShow";
import BestMusicShow from "@/components/shared/MusicShow";
import PreviousShows from "@/components/shared/PreviousShows";
import Sponsor from "@/components/shared/Sponsor";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Two | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <Banner />
      <About />
      <PodcastSection />
      <MusicShow />
      <UpComingShow />
      <PreviousShows />
      <BestMusicShow />
      <Rj />
      <Sponsor />
      <Testimonial />
      <Blog />
      <SubscribeNewsLetter bg="images/bg/subscribe2.jpg" />
    </>
  );
};

export default page;
