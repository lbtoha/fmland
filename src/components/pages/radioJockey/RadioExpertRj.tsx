"use client";
import ExpertRj from "@/components/shared/ExpertRj";
import ExpertRjSliderCard from "@/components/shared/ExpertRjSliderCard";
import Slider from "react-slick";
import { radioJockeys } from "../../../../public/data/radioJockey";

const RadioExpertRj = () => {
  const setting = {
    infinite: true,
    rows: 2,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <ExpertRj>
      <Slider {...setting} className="rj-sldier">
        {radioJockeys.map(({ id, image, name, title }) => (
          <ExpertRjSliderCard
            key={id}
            image={image}
            name={name}
            title={title}
          />
        ))}
      </Slider>
    </ExpertRj>
  );
};

export default RadioExpertRj;
