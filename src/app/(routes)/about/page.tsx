import OurPodcast from "@/components/pages/about/OurPodcast";
import OverView from "@/components/pages/about/OverView";
import Rj from "@/components/pages/about/Rj";
import About from "@/components/pages/home-1/About";
import MusicShow from "@/components/shared/MusicShow";
import PageBanner from "@/components/shared/PageBanner";
import Sponsor from "@/components/shared/Sponsor";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="About Us" />
      <About />
      <OverView />
      <OurPodcast />
      <MusicShow />
      <Sponsor />
      <Rj />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
