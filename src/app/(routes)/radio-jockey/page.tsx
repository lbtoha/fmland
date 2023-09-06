import RadioExpertRj from "@/components/pages/radioJockey/RadioExpertRj";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Jockey | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Radio Jockey" />
      <RadioExpertRj />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
