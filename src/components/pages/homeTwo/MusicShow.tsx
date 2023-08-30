import Image from "next/image";

const MusicShow = () => {
  return (
    // <!-- music show section start -->
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
        {/* <!-- row end --> */}
        <div className="row">
          <div className="col-lg-12 small-player-wrapper">
            <div className="single-audio-player style-two style-sm">
              <div className="single-audio-thumb">
                <Image
                  width={120}
                  height={120}
                  src="/images/shows/player/s1.jpg"
                  alt="image"
                />
                <span className="single-audio-serial">01</span>
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">“The Live Love”</h4>
                  <span className="live-status">Pop</span>
                  <button type="button" className="bookmark-icon">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <audio
                  controls
                  src="assets/audio/main.mp3"
                  className="style-two"
                ></audio>
              </div>
            </div>
            {/* <!-- single-audio-player end --> */}
            <div className="single-audio-player style-two style-sm">
              <div className="single-audio-thumb">
                <Image
                  width={120}
                  height={120}
                  src="/images/shows/player/s2.jpg"
                  alt="image"
                />
                <span className="single-audio-serial">02</span>
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">“The Live Love”</h4>
                  <span className="live-status">Pop</span>
                  <button type="button" className="bookmark-icon">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <audio
                  controls
                  src="assets/audio/main.mp3"
                  className="style-two"
                ></audio>
              </div>
            </div>
            {/* <!-- single-audio-player end --> */}
            <div className="single-audio-player style-two style-sm">
              <div className="single-audio-thumb">
                <Image
                  width={120}
                  height={120}
                  src="/images/shows/player/s3.jpg"
                  alt="image"
                />
                <span className="single-audio-serial">03</span>
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">“The Live Love”</h4>
                  <span className="live-status">Pop</span>
                  <button type="button" className="bookmark-icon">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <audio
                  controls
                  src="assets/audio/main.mp3"
                  className="style-two"
                ></audio>
              </div>
            </div>
            {/* <!-- single-audio-player end --> */}
            <div className="single-audio-player style-two style-sm">
              <div className="single-audio-thumb">
                <Image
                  width={120}
                  height={120}
                  src="/images/shows/player/s4.jpg"
                  alt="image"
                />
                <span className="single-audio-serial">04</span>
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">“The Live Love”</h4>
                  <span className="live-status">Pop</span>
                  <button type="button" className="bookmark-icon">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <audio
                  controls
                  src="assets/audio/main.mp3"
                  className="style-two"
                ></audio>
              </div>
            </div>
            {/* <!-- single-audio-player end --> */}
          </div>
          <div className="col-lg-12 mt-5 text-center">
            <a href="show-schedule.html" className="btn btn-main">
              See More
            </a>
          </div>
        </div>
      </div>
    </section>
    // <!-- music show section end -->
  );
};

export default MusicShow;
