"use client";
import Image from "next/image";
import Slider from "react-slick";

const PodcastSchedule = () => {
  const prevArrow = (
    <button type="button" className="prev">
      <i className="fas fa-chevron-left"></i>
    </button>
  );
  const nextArrow = (
    <button type="button" className="next">
      <i className="fas fa-chevron-right"></i>
    </button>
  );
  var setting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    className: "podcast-slider",
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
    // <!-- podcast section start -->
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
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/1.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>09:00 AM</p>
                      <p>TO</p>
                      <p>10:00 AM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
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
                {/* <!-- podcast-item end --> */}
              </div>
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/2.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>10:15 AM</p>
                      <p>TO</p>
                      <p>11:35 AM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
                        src="/images/artist/2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="artist-content">
                      <h5 className="show-name">Music Podcast</h5>
                      <p className="artist-name">RJ Pavis</p>
                    </div>
                  </div>
                </div>
                {/* <!-- podcast-item end --> */}
              </div>
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/3.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>11:35 AM</p>
                      <p>TO</p>
                      <p>12:55 PM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
                        src="/images/artist/3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="artist-content">
                      <h5 className="show-name">Live Music</h5>
                      <p className="artist-name">RJ Josef</p>
                    </div>
                  </div>
                </div>
                {/* <!-- podcast-item end --> */}
              </div>
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/4.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>01:00 PM</p>
                      <p>TO</p>
                      <p>02:00 PM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
                        src="/images/artist/4.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="artist-content">
                      <h5 className="show-name">News Tech</h5>
                      <p className="artist-name">RJ Mario</p>
                    </div>
                  </div>
                </div>
                {/* <!-- podcast-item end --> */}
              </div>
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/1.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>09:00 AM</p>
                      <p>TO</p>
                      <p>10:00 AM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
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
                {/* <!-- podcast-item end --> */}
              </div>
              <div className="single-slide">
                <div className="podcast-item link-item">
                  <a href="show-details.html" className="full-link"></a>
                  <div className="podcast-item-thumb">
                    <Image
                      width={306}
                      height={360}
                      src="/images/shows/podcast/2.jpg"
                      alt="image"
                    />
                    <div className="thumb-content">
                      <p>10:15 AM</p>
                      <p>TO</p>
                      <p>11:35 AM</p>
                    </div>
                  </div>
                  <div className="podcast-item-content">
                    <div className="artist-thumb">
                      <Image
                        width={306}
                        height={360}
                        src="/images/artist/2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="artist-content">
                      <h5 className="show-name">Music Podcast</h5>
                      <p className="artist-name">RJ Pavis</p>
                    </div>
                  </div>
                </div>
                {/* <!-- podcast-item end --> */}
              </div>
            </Slider>
            {/* <!-- podcast-slider end--> */}
          </div>
        </div>
      </div>
    </section>
    //{/* <!-- podcast section end --> */}
  );
};

export default PodcastSchedule;
