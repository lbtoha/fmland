import Image from "next/image";

const Podcast = () => {
  return (
    //
    //  <!-- podcast section start -->
    <section
      className="pt-120 pb-120 dark-overlay position-relative z-index2"
      style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}
    >
      <div className="left-el">
        <Image
          width={148}
          height={148}
          src="/images/elements/el_plus.png"
          alt="image"
        />
      </div>
      <div className="right-el">
        <Image
          width={394}
          height={436}
          src="/images/elements/right-dot-circle.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Show</span>
              <h2 className="section-title">Top Live Show</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-4">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="podcast-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <div className="podcast-item-thumb">
                <Image
                  width={306}
                  height={460}
                  src="/images/shows/podcast/1.jpg"
                  alt="image"
                />
              </div>
              <div className="podcast-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Music of Pop</h5>
                  <p className="artist-name">RJ Janeski</p>
                </div>
              </div>
            </div>
            {/* <!-- podcast-item end --> */}
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="podcast-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <div className="podcast-item-thumb">
                <Image
                  width={306}
                  height={460}
                  src="/images/shows/podcast/2.jpg"
                  alt="image"
                />
              </div>
              <div className="podcast-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Music Podcast</h5>
                  <p className="artist-name">RJ Pavis</p>
                </div>
              </div>
            </div>
            {/* <!-- podcast-item end --> */}
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="podcast-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <div className="podcast-item-thumb">
                <Image
                  width={306}
                  height={460}
                  src="/images/shows/podcast/3.jpg"
                  alt="image"
                />
              </div>
              <div className="podcast-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/3.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Live Music</h5>
                  <p className="artist-name">RJ Josef</p>
                </div>
              </div>
            </div>
            {/* <!-- podcast-item end --> */}
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="podcast-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <div className="podcast-item-thumb">
                <Image
                  width={306}
                  height={460}
                  src="/images/shows/podcast/4.jpg"
                  alt="image"
                />
              </div>
              <div className="podcast-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/4.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">News Tech</h5>
                  <p className="artist-name">RJ Mario</p>
                </div>
              </div>
            </div>
            {/* <!-- podcast-item end --> */}
          </div>
        </div>
        {/* <!-- podcast-slider end--> */}
      </div>
    </section>
    //
    //  <!-- podcast section end -->
  );
};

export default Podcast;
