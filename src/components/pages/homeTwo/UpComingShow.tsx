import Image from "next/image";

const UpComingShow = () => {
  return (
    //<!-- upcoming section start -->
    <section className="upcoming-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-end gy-4">
          <div className="col-lg-6">
            <div className="upcoming-section-thumb">
              <Image
                width={837}
                height={680}
                src="/images/bg/upcoming.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="upcoming-content">
              <span className="top-title">Upcoming Show</span>
              <h2 className="section-title">Music Life Event</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                maecenas commodo mollis sagittis quisque.
              </p>
              <div className="show-rj">
                <div className="show-rj-thumb">
                  <Image
                    width={90}
                    height={128}
                    src="/images/shows/show-rj.jpg"
                    alt="image"
                  />
                </div>
                <div className="show-rj-content">
                  <h4 className="show-rj-name">RJ Merino</h4>
                  <p>09AM To 10PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //<!-- upcoming section end -->
  );
};

export default UpComingShow;
