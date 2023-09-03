import BlogDetailsComments from "./BlogDetailsComments";
import DetailsBlogPost from "./DetailsBlogPost";
import PostAComments from "./PostAComments";
import WidgetBoxFour from "./WidgetBoxFour";
import WidgetBoxOne from "./WidgetBoxOne";
import WidgetBoxThree from "./WidgetBoxThree";
import WidgetBoxTwo from "./WidgetBoxTwo";

const BlogDetails = () => {
  return (
    //  blog details section start
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-8">
            <DetailsBlogPost />

            <BlogDetailsComments />

            <PostAComments />
          </div>
          <div className="col-xl-4">
            <WidgetBoxOne />
            <WidgetBoxTwo />
            <WidgetBoxThree />
            <WidgetBoxFour />
          </div>
        </div>
      </div>
    </section>

    //  blog details section end
  );
};

export default BlogDetails;
