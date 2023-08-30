import Image from "next/image";

const JockeyDetails = () => {
  return (
    //
    //   <!-- rj details section start -->
    <section className="pt-120 pb-120 section-bg">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4">
            <div className="rj-details-thumb">
              <Image
                width={416}
                height={537}
                src="/images/rj/b1.jpg"
                alt="image"
              />
            </div>

            <div className="rj-details-box mt-30 text-center">
              <h4>RJ Miron</h4>
              <p className="rj-details-designation">Music Artist</p>
              <ul className="rj-social-links justify-content-center">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="rj-details-box">
              <div className="rj-details-contact">
                <div className="left">
                  <h5 className="title">Contact Info</h5>
                  <ul className="rj-details-contact-list">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>
                        Location: <span>London</span>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i>
                      <p>
                        Phone Number: <span>+123 458 5425</span>
                      </p>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <p>
                        Email: <span>info@gmail.com</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="right">
                  <Image
                    width={232}
                    height={64}
                    src="/images/logo.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* <!-- rj-details-box end --> */}
            <div className="rj-details-box">
              <h5 className="title">Biography</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                vivamus elementum ultricies sed aliquam tristique morbi sit. Est
                cras donec augue lorem morbi eget arcu, volutpat. Suspendisse
                odio vitae ultrices quisque. Nisl feugiat nisi quis vestibulum,
                aliquet molestie malesuada magnis arcu.{" "}
              </p>
            </div>
            {/* <!-- rj-details-box end --> */}
            <div className="rj-details-box">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="rj-experience">
                    <h5 className="mb-2 fw-500">2017-2019</h5>
                    <p>Redio 94.5 (Music Artist)</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="rj-experience">
                    <h5 className="mb-2 fw-500">2017-2019</h5>
                    <p>Redio 94.5 (Music Artist)</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="rj-experience">
                    <h5 className="mb-2 fw-500">2017-2019</h5>
                    <p>Redio 94.5 (Music Artist)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- rj-details-box end --> */}
          </div>
        </div>
      </div>
    </section>
    //
    //    <!-- rj details section end -->
  );
};

export default JockeyDetails;
