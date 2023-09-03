"use client";
import { blogData } from "@/../public/data/blogData";
import BlogCard from "@/components/shared/BlogCard";
import { useState } from "react";

const Blog = () => {
  const initialPost = blogData.slice(0, 3);
  const [showPost, setShowPost] = useState(initialPost);

  const handleShowPost = () => {
    const remainPost = blogData.length - showPost.length;
    if (remainPost < 3) {
      const newPost = blogData.slice(
        showPost.length,
        showPost.length + remainPost
      );
      setShowPost([...showPost, ...newPost]);
    } else {
      const newPost = blogData.slice(showPost.length, showPost.length + 3);
      setShowPost([...showPost, ...newPost]);
    }
  };

  return (
    //  blog section start
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Blog</span>
              <h2 className="section-title">Our Latest News</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}

        <div className="row gy-4 justify-content-center">
          {showPost.map(({ id, blogTitle, author, publishData, blogImage }) => (
            <BlogCard
              key={id}
              author={author}
              blogImage={blogImage}
              blogTitle={blogTitle}
              publishData={publishData}
            />
          ))}
        </div>
        <div
          className={`mt-50 text-center ${
            showPost.length === blogData.length && "d-none"
          }`}
        >
          <button onClick={handleShowPost} className="btn btn-main">
            View More
          </button>
        </div>
      </div>
    </section>
    // blog section end
  );
};

export default Blog;
