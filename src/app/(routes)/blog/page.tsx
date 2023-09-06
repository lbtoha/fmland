import Blog from "@/components/pages/blog/Blog";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Blog" />
      <Blog />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
