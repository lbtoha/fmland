import Image from "next/image";

const ShowDetails = () => {
  return (
    // <!-- show details section start -->
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="show-details-thumb">
              <Image
                width={636}
                height={413}
                src="/images/bg/show-details.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="show-details-content">
              <h2 className="section-title">“Music of Pop”</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nullam gravida leo iaculis risus feugiat.
              </p>
              <h4 className="show-details-time">09:10 - 10:10 PM</h4>

              <div className="podcast-item-content">
                <div className="artist-thumb">
                  <Image
                    width={86}
                    height={89}
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
          </div>
        </div>
      </div>
    </section>
    // <!-- show details section end -->
  );
};

export default ShowDetails;
