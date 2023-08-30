import Image from "next/image";

const PreviousShow = () => {
  return (
    //  <!-- previous show section start -->
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Yesterday</span>
              <h2 className="section-title">Previous shows </h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row gy-4 justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="show-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <Image
                width={416}
                height={299}
                src="/images/shows/previous/1.jpg"
                alt="image"
              />
              <div className="show-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Life Music</h5>
                  <p className="artist-name">Rj Movin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="show-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <Image
                width={416}
                height={299}
                src="/images/shows/previous/2.jpg"
                alt="image"
              />
              <div className="show-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Music Artist Podcast</h5>
                  <p className="artist-name">Rj Sonai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="show-item link-item">
              <a href="show-details.html" className="full-link"></a>
              <Image
                width={416}
                height={299}
                src="/images/shows/previous/3.jpg"
                alt="image"
              />
              <div className="show-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={86}
                    src="/images/artist/3.jpg"
                    alt="image"
                  />
                </div>
                <div className="artist-content">
                  <h5 className="show-name">Music World</h5>
                  <p className="artist-name">Rj Josino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   {/* <!-- previous show section end --> */}
  );
};

export default PreviousShow;
