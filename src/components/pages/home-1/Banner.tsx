import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    //  banner section start
    <section
      className="banner-section"
      style={{ backgroundImage: "url('/images/bg/banner-bg.png')" }}
    >
      <div
        className="banner-right-img"
        style={{ backgroundImage: "url('/images/bg/banner-right.jpg')" }}
      ></div>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <h2 className="banner-title text-md-start text-center">
              Listen and Enjoy With FM.Land <span>92.0</span>
            </h2>
            <div className="banner-sm-show">
              <div className="sm-show-thumb">
                <Image
                  src="/images/bg/banner-sm-show.jpg"
                  height={182}
                  width={108}
                  alt="image"
                />
              </div>
              <div className="sm-show-content">
                <p>RJ Mario</p>
                <p>Sunday at 2:15AM</p>
                <h4 className="sm-show-title">Let&apos;s Go The Music</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 text-md-start text-center">
            <Link href="/show-details" className="play-btn">
              <i className="fas fa-play"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
    //   banner section end
  );
};

export default Banner;
