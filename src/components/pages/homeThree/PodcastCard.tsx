import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  artistImage: StaticImageData;
  showName: string;
  artistName: string;
};

const PodcastCard = ({ image, artistImage, showName, artistName }: Props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="podcast-item link-item">
        <Link href="show-details" className="full-link"></Link>
        <div className="podcast-item-thumb">
          <Image width={306} height={460} src={image} alt="image" />
        </div>
        <div className="podcast-item-content">
          <div className="artist-thumb">
            <Image width={86} height={86} src={artistImage} alt="image" />
          </div>
          <div className="artist-content">
            <h5 className="show-name">{showName}</h5>
            <p className="artist-name">{artistName}</p>
          </div>
        </div>
      </div>
      {/*  podcast-item end  */}
    </div>
  );
};

export default PodcastCard;
