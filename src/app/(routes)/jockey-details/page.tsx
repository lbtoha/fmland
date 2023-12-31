import JockeyDetails from "@/components/pages/jockeyDetails/JockeyDetails";
import LiveShow from "@/components/pages/jockeyDetails/LiveShow";
import RjShows from "@/components/pages/jockeyDetails/RjShows";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Jockey Details | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Jockey Details" />
      <JockeyDetails />
      <RjShows />
      <LiveShow />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
