import Image from "next/image";
import Link from "next/link";

const OurPodcast = () => {
  return (
    //  podcast section start
    <section
      className="dark-overlay pt-120 pb-120"
      style={{ backgroundImage: "url('/images/bg/podcast.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Our Podcast</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="podcard-show-item">
              <div className="icon">
                <Image
                  width={36}
                  height={27}
                  src="/images/icons/podcast/1.png"
                  alt="image"
                />
              </div>
              <h5 className="podcard-show-title">Live Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque
              </p>
              <Link href="#0" className="podcard-show-link">
                Explore More
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="podcard-show-item">
              <div className="icon">
                <Image
                  width={34}
                  height={34}
                  src="/images/icons/podcast/2.png"
                  alt="image"
                />
              </div>
              <h5 className="podcard-show-title">Previous Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque
              </p>
              <a href="#0" className="podcard-show-link">
                Explore More
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="podcard-show-item">
              <div className="icon">
                <Image
                  width={34}
                  height={34}
                  src="/images/icons/podcast/3.png"
                  alt="image"
                />
              </div>
              <h5 className="podcard-show-title">Upcoming Shows</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                purus pellentesque
              </p>
              <Link href="#0" className="podcard-show-link">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   podcast section end
  );
};

export default OurPodcast;
