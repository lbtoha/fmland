import Image, { StaticImageData } from "next/image";

const ExpertRjSliderCard = ({
  image,
  name,
  title,
}: {
  image: StaticImageData;
  name: string;
  title: string;
}) => {
  return (
    <div className="single-slide">
      <div className="rj-item style-two">
        <div className="thumb">
          <Image width={306} height={460} src={image} alt="image" />
        </div>
        <div className="content">
          <h4 className="rj-name">
            <a href="jockey-details.html">{name}</a>
          </h4>
          <p className="rj-designation">{title}</p>
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
      </div>
      {/*  rj-item end  */}
    </div>
  );
};

export default ExpertRjSliderCard;
