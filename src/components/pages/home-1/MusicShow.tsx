import Image from "next/image";

const MusicShow = () => {
  return (
    // <!-- music show section start -->
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <div className="music-show-content">
              <span className="top-title">Music Show</span>
              <h2 className="section-title">Life Event Music Live Show</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper. Cursus
                tellus tincidunt elementum feugiat sed sit ultrices. Adipiscing
                non lacinia laoreet dui pulvinar tristique.{" "}
              </p>
              <a href="show-schedule.html" className="btn btn-main">
                See More
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="row">
              <div className="col-lg-6 d-lg-flex align-items-end d-none">
                <div className="music-thumb-one">
                  <Image
                    width={306}
                    height={480}
                    src="/images/shows/music/1.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="music-thumb-two d-lg-block d-none">
                  <Image
                    width={306}
                    height={413}
                    src="/images/shows/music/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="music-thumb-three">
                  <Image
                    width={305}
                    height={153}
                    src="/images/shows/music/3.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //<!-- music show section end -->
  );
};

export default MusicShow;
