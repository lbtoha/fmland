"use client";
import podcastScheduleCardData from "@/../public/data/podcastScheduleCardData";
import { MouseEvent } from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PodcastScheduleCard from "./PodcastScheduleCard";
import PrevArrow from "./PrevArrow";

const PodcastSchedule = () => {
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
    speed: 500,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1400,
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
    //  podcast section start
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Podcast Schedule</h2>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs show-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="day1-tab"
              data-bs-toggle="tab"
              data-bs-target="#day1-tab-pane"
              type="button"
              role="tab"
              aria-controls="day1-tab-pane"
              aria-selected="true"
            >
              Saturday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day2-tab"
              data-bs-toggle="tab"
              data-bs-target="#day2-tab-pane"
              type="button"
              role="tab"
              aria-controls="day2-tab-pane"
              aria-selected="false"
            >
              Sunday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day3-tab"
              data-bs-toggle="tab"
              data-bs-target="#day3-tab-pane"
              type="button"
              role="tab"
              aria-controls="day3-tab-pane"
              aria-selected="false"
            >
              Monday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day4-tab"
              data-bs-toggle="tab"
              data-bs-target="#day4-tab-pane"
              type="button"
              role="tab"
              aria-controls="day4-tab-pane"
              aria-selected="false"
            >
              Tuesday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day5-tab"
              data-bs-toggle="tab"
              data-bs-target="#day5-tab-pane"
              type="button"
              role="tab"
              aria-controls="day5-tab-pane"
              aria-selected="false"
            >
              Wednesday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day6-tab"
              data-bs-toggle="tab"
              data-bs-target="#day6-tab-pane"
              type="button"
              role="tab"
              aria-controls="day6-tab-pane"
              aria-selected="false"
            >
              Thursday
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="day7-tab"
              data-bs-toggle="tab"
              data-bs-target="#day7-tab-pane"
              type="button"
              role="tab"
              aria-controls="day7-tab-pane"
              aria-selected="false"
            >
              Friday
            </button>
          </li>
        </ul>
        <div className="tab-content show-tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="day1-tab-pane"
            role="tabpanel"
            aria-labelledby="day1-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day2-tab-pane"
            role="tabpanel"
            aria-labelledby="day2-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day3-tab-pane"
            role="tabpanel"
            aria-labelledby="day3-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day4-tab-pane"
            role="tabpanel"
            aria-labelledby="day4-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day5-tab-pane"
            role="tabpanel"
            aria-labelledby="day5-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day6-tab-pane"
            role="tabpanel"
            aria-labelledby="day6-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
          <div
            className="tab-pane fade"
            id="day7-tab-pane"
            role="tabpanel"
            aria-labelledby="day7-tab"
            // tabindex="0"
          >
            <Slider {...setting} className="podcast-slider">
              {podcastScheduleCardData.map(
                ({ id, image, artistImage, showName, artistName }) => (
                  <PodcastScheduleCard
                    key={id}
                    image={image}
                    artistImage={artistImage}
                    showName={showName}
                    artistName={artistName}
                  />
                )
              )}
            </Slider>
            {/*  podcast-slider end */}
          </div>
        </div>
      </div>
    </section>
    //{/*  podcast section end  */}
  );
};

export default PodcastSchedule;
