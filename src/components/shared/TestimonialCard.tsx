import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  listenerImage: StaticImageData;
  listenerName: string;
  title: string;
  message: string;
};

const TestimonialCard = ({
  listenerImage,
  listenerName,
  title,
  message,
}: Props) => {
  const pathName = usePathname();

  return (
    <div className="single-slide">
      <div
        className={`testimonial-item ${
          pathName === "/home-two" && "style-two"
        } ${pathName === "/home-three" && "style-three quote-top-middle"}`}
      >
        <i className="fas fa-quote-right testimonial-quote"></i>
        <div className="testimonial-client">
          <div className="client-thumb">
            <Image width={81} height={81} src={listenerImage} alt="image" />
          </div>
          <div className="client-content">
            <h5 className="client-nae">{listenerName}</h5>
            <p>{title}</p>
          </div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
