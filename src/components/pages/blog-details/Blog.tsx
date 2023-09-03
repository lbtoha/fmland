import { blogData } from "@/../public/data/blogData";
import BlogCard from "@/components/shared/BlogCard";

const Blog = () => {
  return (
    //  blog section start
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <h2 className="section-title">Related Latest News</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}

        <div className="row gy-4 justify-content-center">
          {blogData
            .slice(0, 3)
            .map(({ id, blogTitle, author, publishData, blogImage }) => (
              <BlogCard
                key={id}
                author={author}
                blogImage={blogImage}
                blogTitle={blogTitle}
                publishData={publishData}
              />
            ))}
        </div>
      </div>
    </section>
    // blog section end
  );
};

export default Blog;
