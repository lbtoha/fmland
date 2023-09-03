import Image from "next/image";
import AudioPlayerWithProgressBar from "../homeTwo/AudioPlayerWithProgressBar";

const LiveShow = () => {
  return (
    //  rj live show section start
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Music Shows</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rj-live-show single-audio-player style-two style-sm">
              <span className="live-status">Live</span>
              <div className="rj-live-show-thumb">
                <Image
                  width={857}
                  height={499}
                  src="/images/shows/rj-shows/b1.jpg"
                  alt="image"
                />
              </div>
              <div className="single-audio-content">
                <AudioPlayerWithProgressBar audio="assets/audio/main.mp3" />
              </div>
            </div>
            {/*  single-audio-player end  */}
          </div>
        </div>
      </div>
    </section>

    //  rj live show section end  */}
  );
};

export default LiveShow;
