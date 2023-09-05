import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ExpertRjCardOne = ({
  image,
  name,
  title,
}: {
  image: StaticImageData;
  name: string;
  title: string;
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="rj-item style-three">
        <div className="thumb">
          <Image width={306} height={460} src={image} alt="image" />
          <ul className="rj-social-links">
            <li>
              <Link href="#0">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="jockey-details">{name}</Link>
          </h5>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertRjCardOne;
