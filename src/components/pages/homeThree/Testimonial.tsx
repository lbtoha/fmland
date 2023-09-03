import NextArrow from "@/components/shared/NextArrow";
import PrevArrow from "@/components/shared/PrevArrow";
import TestimonialCard from "@/components/shared/TestimonialCard";
import Image from "next/image";
import { MouseEvent } from "react";
import Slider from "react-slick";
import testimonialData from "../../../../public/data/testimonial";

const Testimonial = () => {
  const setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: (
      <PrevArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          console.log("clicked");
        }}
      />
    ),
    nextArrow: (
      <NextArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          console.log("clicked");
        }}
      />
    ),
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 1000,
    autoplaySpeed: 500,
  };
  return (
    //  testimonial section start
    <section className="testimonial-section position-relative z-index2 section-bg pt-120 pb-120 overflow-hidden">
      <div className="bottom-plus">
        <Image
          width={148}
          height={148}
          src="/images/elements/el_plus.png"
          alt="image"
        />
      </div>

      <div className="testimoninal-dots">
        <Image
          width={133}
          height={287}
          src="/images/elements/top-dots2.png"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Testimonial</span>
              <h2 className="section-title">Our Lovely Listener</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Slider {...setting} className="testimonial-slider-two">
              {testimonialData.map(({ id, ...props }) => (
                <TestimonialCard key={id} {...props} />
              ))}
              <div className="single-slide">
                <div className="testimonial-item style-three quote-top-middle">
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
                      <h5 className="client-nae">Alex</h5>
                      <p>Music Artist</p>
                    </div>
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Et, fermentum sed sit ut leo dui purus. Sit nulla at ut
                    habitasse laoreet interdum sagittis habitasse. Feugiat et”.
                  </p>
                </div>
              </div>
              {/*  single-slide end  */}
              <div className="single-slide">
                <div className="testimonial-item style-three quote-top-middle">
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
              {/*  single-slide end  */}
              <div className="single-slide">
                <div className="testimonial-item style-three quote-top-middle">
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
              {/*  single-slide end  */}
              <div className="single-slide">
                <div className="testimonial-item style-three quote-top-middle">
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
              {/*  single-slide end  */}
            </Slider>
            {/*  testimonial-slider end  */}
          </div>
        </div>
      </div>
    </section>
    //    testimonial section end
  );
};

export default Testimonial;
