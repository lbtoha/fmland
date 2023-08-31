import Image from "next/image";
import Link from "next/link";

const LivePodcast = () => {
  return (
    //<!-- podcast section start -->
    <section className="pt-120 pb-120 position-relative z-index2">
      <div className="wave-shape">
        <Image
          width={312}
          height={310}
          src="/images/elements/wave-shape.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Podcast Schedule</h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}

        <div className="row justify-content-center gy-4">
          <div className="col-lg-4">
            <div className="icon-card">
              <div className="icon">
                <i className="fas fa-podcast"></i>
              </div>
              <h5 className="title">Live Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque.
              </p>
              <a href="#0" className="text-base arrow-btn mt-4">
                Explor More
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <div className="icon">
                <i className="fas fa-step-backward"></i>
              </div>
              <h5 className="title">Previous Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque.
              </p>
              <Link href="#0" className="text-base arrow-btn mt-4">
                Explor More
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-card">
              <div className="icon">
                <i className="far fa-calendar-alt"></i>
              </div>
              <h5 className="title">Upcoming Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque.
              </p>
              <a href="#0" className="text-base arrow-btn mt-4">
                Explor More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- podcast section end -->
  );
};

export default LivePodcast;
