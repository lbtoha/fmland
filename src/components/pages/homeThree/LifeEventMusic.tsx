import Image from "next/image";

const LifeEventMusic = () => {
  return (
    //  <!-- Life event music show section start -->
    <section className="pt-120 pb-120 position-relative z-index2 section-bg">
      <div className="dot-shape">
        <Image
          width={287}
          height={133}
          src="/images/elements/dot-shape.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-6">
            <Image
              width={636}
              height={510}
              src="/images/shows/music/6.png"
              alt="image"
            />
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="music-show-content">
              <span className="top-title">Music Show</span>
              <h2 className="section-title">Life Event Music Live Show</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper. Cursus
                tellus tincidunt elementum feugiat sed sit ultrices. Adipiscing
                non lacinia laoreet dui pulvinar tristique.
              </p>
              <a href="#0" className="btn btn-main mt-40">
                See More
              </a>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
      </div>
    </section>
    //  <!-- Life event music show section end -->
  );
};

export default LifeEventMusic;
