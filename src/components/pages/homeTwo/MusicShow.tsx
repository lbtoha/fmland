import latestMusicData from "@/../public/data/latestMusicData";
import Image from "next/image";
import Link from "next/link";
import SingleAudioPlayer from "./SingleAudioPlayer";

const MusicShow = () => {
  return (
    //  music show section start
    <section className="pt-120 pb-120 section-bg position-relative z-index-p overflow-hidden">
      <div className="top-corner-el">
        <Image
          width={577}
          height={584}
          src="/images/about/about-circle.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Latest Music</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row">
          <div className="col-lg-12 small-player-wrapper">
            {latestMusicData.map(({ id, ...props }, index) => (
              <SingleAudioPlayer key={id} trackNumber={index + 1} {...props} />
            ))}

            {/*  single-audio-player end  */}
          </div>
          <div className="col-lg-12 mt-5 text-center">
            <Link href="show-schedule" className="btn btn-main">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
    //  music show section end
  );
};

export default MusicShow;
