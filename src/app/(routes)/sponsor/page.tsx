import JoinSponsor from "@/components/pages/sponsor/JoinSponsor";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Sponsor" />
      <JoinSponsor />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
