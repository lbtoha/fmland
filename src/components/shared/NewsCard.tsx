import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  blogImage: StaticImageData;
  publishData: string;
  author: string;
  blogTitle: string;
};

const NewsCard = ({ id, blogImage, publishData, author, blogTitle }: Props) => {
  return (
    <div className="blog-item">
      <div className="blog-thumb">
        <a href="blog-details.html" className="d-block h-100">
          <Image width={416} height={180} src={blogImage} alt="image" />
        </a>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="single-meta">{author}</span>
          <span className="single-meta">{publishData}</span>
        </div>
        <h4 className="blog-title">
          <a href="blog-details.html">{blogTitle}</a>
        </h4>
        <Link href="/blogDetails" className="blog-btn">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
