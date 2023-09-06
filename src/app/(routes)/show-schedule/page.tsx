import UpCommingShow from "@/components/pages/about/UpCommingShow";
import PageBanner from "@/components/shared/PageBanner";
import PodcastSchedule from "@/components/shared/PodcastSchedule";
import PreviousShows from "@/components/shared/PreviousShows";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show Schedule | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Show Schedule" />
      <PodcastSchedule />
      <PreviousShows />
      <UpCommingShow />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
