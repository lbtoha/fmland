import Image from "next/image";

const UpcomingShow = () => {
  return (
    //  upcoming show start
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Show</span>
              <h2 className="section-title">Upcoming show</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="upcoming-show">
              <div className="upcoming-content">
                <h4 className="upcoming-title">Music Life Event</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  maecenas commodo mollis sagittis quisque.
                </p>
                <div className="show-rj">
                  <div className="show-rj-thumb">
                    <Image
                      width={306}
                      height={250}
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
              <div className="upcoming-thumb">
                <Image
                  width={416}
                  height={450}
                  src="/images/shows/upcoming.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  upcoming show end
  );
};

export default UpcomingShow;
