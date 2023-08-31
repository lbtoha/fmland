import Image, { StaticImageData } from "next/image";

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
              <a href="#0">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h5 className="name">
            <a href="jockey-details.html">{name}</a>
          </h5>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertRjCardOne;
