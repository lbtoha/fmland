import Image from "next/image";

const Banner = () => {
  return (
    // <!-- banner section start -->
    <section
      className="banner-section style-two"
      style={{ backgroundImage: "url('/images/bg/banner-bg2.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6 text-lg-end text-center">
            <h2 className="banner-title">
              Listen FM.Land <span>92.0</span>
            </h2>
            <p className="banner-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="single-audio-player style-two">
              <div className="single-audio-thumb">
                <Image
                  width={196}
                  height={140}
                  src="/images/shows/player/2.jpg"
                  alt="image"
                />
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">The Live Love Show</h4>
                  <p className="audio-time">
                    RJ Alex 1:15-2:45 PM{" "}
                    <span className="live-status">Live</span>
                  </p>
                </div>
                <audio
                  controls
                  src="assets/audio/main.mp3"
                  className="style-two"
                ></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    //  <!-- banner section end -->
  );
};

export default Banner;
