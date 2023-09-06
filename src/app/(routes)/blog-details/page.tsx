import Blog from "@/components/pages/blog-details/Blog";
import BlogDetails from "@/components/pages/blog-details/BlogDetails";
import PageBanner from "@/components/shared/PageBanner";
import SubscribeNewsLetter from "@/components/shared/SubscribeNewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details | Online Radio NextJs Template",
  description: "Online Radio NextJs Template",
};

const page = () => {
  return (
    <>
      <PageBanner pageTitle="Blog Details" />
      <BlogDetails />
      <Blog />
      <SubscribeNewsLetter />
    </>
  );
};

export default page;
