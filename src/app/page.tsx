import UpCommingShow from "@/components/pages/about/UpCommingShow";
import About from "@/components/pages/home-1/About";
import Banner from "@/components/pages/home-1/Banner";
import Blog from "@/components/pages/home-1/Blog";
import ExpertRj from "@/components/pages/home-1/ExpertRj";
import MusicShow from "@/components/pages/home-1/MusicShow";
import Player from "@/components/pages/home-1/Player";
import PreviousShow from "@/components/pages/home-1/PreviousShow";
import Testimonial from "@/components/pages/home-1/Testimonial";
import PodcastSchedule from "@/components/shared/PodcastSchedule";
import Sponsor from "@/components/shared/Sponsor";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";

const page = () => {
  return (
    <>
      <Banner />
      <Player />
      <PodcastSchedule />
      <About />
      <PreviousShow />
      <MusicShow />
      <ExpertRj />
      <UpCommingShow />
      <Sponsor />
      <Testimonial />
      <Blog />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
