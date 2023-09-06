import FAQ from "@/components/pages/faq/FAQ";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="FAQ" />
      <FAQ />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
