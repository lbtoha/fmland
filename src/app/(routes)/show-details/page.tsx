import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import Gest from "@/components/show-details/Gest";
import ShowDetails from "@/components/show-details/ShowDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show Details | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Show Details" />
      <ShowDetails />
      <Gest />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
