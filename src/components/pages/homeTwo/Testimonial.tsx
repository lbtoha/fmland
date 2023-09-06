"use client";
import testimonialData from "@/../public/data/testimonial";
import NextArrow from "@/components/shared/NextArrow";
import PrevArrow from "@/components/shared/PrevArrow";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { MouseEvent } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const setting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: (
      <PrevArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {}}
      />
    ),
    nextArrow: (
      <NextArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {}}
      />
    ),
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 600,
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
    //  testimonial section start
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
        {/*  row end  */}
        <Slider {...setting} className="testimonial-slider">
          {testimonialData.map(({ id, ...props }) => (
            <TestimonialCard key={id} {...props} />
          ))}
        </Slider>
        {/*  testimonial-slider end  */}
      </div>
    </section>

    // testimonial section end
  );
};

export default Testimonial;
