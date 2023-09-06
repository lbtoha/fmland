import Contact from "@/components/contactUs/Contact";
import ContactInfo from "@/components/contactUs/ContactInfo";

import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Contact Us" />
      <ContactInfo />
      <Contact />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
