"use client";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {
  const setting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: (
      <button type="button" className="prev">
        <i className="fas fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="next">
        <i className="fas fa-chevron-right"></i>
      </button>
    ),
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 1000,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    // <!-- testimonial section start -->
    <section
      className="testimonial-section has-overlay pt-120 pb-120 overflow-hidden"
      style={{ backgroundImage: "url('assets/images/bg/testimonial.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Testimonial</span>
              <h2 className="section-title">Our Lovely Listener</h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <Slider {...setting} className="testimonial-slider">
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Alino</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Ranio</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/3.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Jesicca</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/4.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Alex</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Alino</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="testimonial-item style-two">
              <i className="fas fa-quote-right testimonial-quote"></i>
              <div className="testimonial-client">
                <div className="client-thumb">
                  <Image
                    width={81}
                    height={81}
                    src="/images/testimonial/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="client-content">
                  <h5 className="client-nae">Ranio</h5>
                  <p>Music Artist</p>
                </div>
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim imperdiet justo, sapien viverra commodo id duis
                praesent tempus.”
              </p>
            </div>
          </div>
          {/* <!-- single-slide end --> */}
        </Slider>
        {/* <!-- testimonial-slider end --> */}
      </div>
    </section>

    //<!-- testimonial section end -->
  );
};

export default Testimonial;
