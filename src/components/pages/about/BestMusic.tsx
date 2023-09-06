import Image from "next/image";
import Link from "next/link";

const BestMusic = () => {
  return (
    //  about section start
    <section className="pt-120 pb-120 section-bg overflow-hidden">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="about-thumb-wrapper">
              <Image
                width={416}
                height={550}
                src="/images/about/left-img.jpg"
                alt="image"
              />
              <Image
                width={577}
                height={584}
                src="/images/about/about-circle.png"
                alt="image"
                className="about-thumb-circle"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <span className="top-title">About Us</span>
              <h2 className="section-title">Best Music FM Your Lestening</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper. Cursus
                tellus tincidunt elementum feugiat sed sit ultrices. Adipiscing
                non lacinia laoreet dui pulvinar tristique.{" "}
              </p>
              <Link href="about" className="btn btn-main">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   about section end
  );
};

export default BestMusic;
