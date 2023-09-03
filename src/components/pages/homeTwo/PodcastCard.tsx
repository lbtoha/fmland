import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  artistImage: StaticImageData;
  showName: string;
  artistName: string;
};

const PodcastCard = ({ image, artistImage, showName, artistName }: Props) => {
  return (
    <div className="single-slide">
      <div className="podcast-item style-two link-item">
        <a href="show-details.html" className="full-link"></a>
        <div className="podcast-item-thumb">
          <Image width={306} height={258} src={image} alt="image" />
          <div className="thumb-content">
            <p>09:00-10:AM</p>
          </div>
        </div>
        <div className="podcast-item-content">
          <div className="artist-thumb">
            <Image width={60} height={60} src={artistImage} alt="image" />
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
