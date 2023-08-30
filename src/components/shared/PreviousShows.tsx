"use client";
import Slider from "react-slick";
import PreviousShowsCard from "../pages/about/PreviousShowsCard";

const PreviousShows = () => {
  const setting = {
    infinite: true,
    slidesToShow: 3,
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
    centerMode: true,
    centerPadding: "308px",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    // <!-- previous show section start -->
    <section
      className="previous-show-section pt-120 pb-120 overflow-hidden"
      style={{ backgroundImage: "url('/images/bg/previous-show.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Yesterday</span>
              <h2 className="section-title">Previous shows </h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
      </div>
      <Slider {...setting} className="previous-show-slider">
        <PreviousShowsCard />
        <PreviousShowsCard />
        <PreviousShowsCard />
        <PreviousShowsCard />
        <PreviousShowsCard />
        <PreviousShowsCard />
      </Slider>
    </section>
    //  <!-- previous show section end -->
  );
};

export default PreviousShows;
