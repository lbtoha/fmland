import Image from "next/image";
import AudioPlayerWithProgressBar from "../homeTwo/AudioPlayerWithProgressBar";

const Banner = () => {
  return (
    //  banner section start
    <section
      className="banner-section style-two"
      style={{ backgroundImage: "url('/images/bg/banner-bg3.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="banner-title style-two">
              Listen and Enjoy With FM.Land 92.0
            </h2>
          </div>
        </div>
        {/*  row end  */}
      </div>
      <div className="banner-bottom-player">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-audio-player style-two">
                <div className="single-audio-thumb">
                  <Image
                    width={100}
                    height={100}
                    src="/images/shows/player/3.jpg"
                    alt="image"
                  />
                </div>
                <div className="single-audio-content-top">
                  <h4 className="title">“Life Is Love”</h4>
                  <p className="audio-time">RJ Alex 1:15-2:45 PM</p>
                </div>
                <div className="single-audio-content">
                  <AudioPlayerWithProgressBar audio="/audio/main.mp3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  banner section end
  );
};

export default Banner;
