import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  artistImage: StaticImageData;
  showName: string;
  artistName: string;
};

const PreviousShowCard = ({
  image,
  artistImage,
  showName,
  artistName,
}: Props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="show-item link-item">
        <Link href="show-details" className="full-link"></Link>
        <Image width={416} height={299} src={image} alt="image" />
        <div className="show-item-content">
          <div className="artist-thumb">
            <Image width={86} height={86} src={artistImage} alt="image" />
          </div>
          <div className="artist-content">
            <h5 className="show-name">{showName}</h5>
            <p className="artist-name">{artistName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousShowCard;
