import Image from "next/image";
import Link from "next/link";
import AudioPlayerWithProgressBar from "../homeTwo/AudioPlayerWithProgressBar";

const MusicShow = () => {
  return (
    //  music show section start
    <section className="pt-120 pb-120 section-bg position-relative z-index-p">
      <div className="best-music-dots">
        <Image
          width={133}
          height={287}
          src="/images/elements/top-dots2.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row gy-5 justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="music-single-thumb rounded-30 overflow-hidden">
              <Image
                width={526}
                height={550}
                src="/images/shows/music/5.jpg"
                alt="image"
              />

              <button className="music-single-thumb-bookmark">
                <i className="ri-heart-fill"></i>
              </button>

              <div className="music-single-thumb-content">
                <h3 className="title">Music Of World</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>

              <div className="single-audio-player style-three style-sm">
                <div className="single-audio-content">
                  <AudioPlayerWithProgressBar audio="/audio/main.mp3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="music-show-content">
              <span className="top-title">Best Music</span>
              <h2 className="section-title">Life Event Best Music Shows</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper. Cursus
                tellus tincidunt elementum feugiat sed sit ultrices. Adipiscing
                non lacinia laoreet dui pulvinar tristique.
              </p>
              <Link href="#0" className="btn btn-main mt-40">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   music show section end
  );
};

export default MusicShow;
