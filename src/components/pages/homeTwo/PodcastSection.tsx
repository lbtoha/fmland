"use client";
import Image from "next/image";
import Slider from "react-slick";

const PodcastSection = () => {
  const setting = {
    infinite: true,
    rows: 2,
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <section className="pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Podcast Schedule</h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row">
          <div className="col-lg-3">
            <ul
              className="nav nav-tabs show-tabs-two"
              id="myTab"
              role="tablist"
            >
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
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="day1-tab-pane"
                role="tabpanel"
                aria-labelledby="day1-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day2-tab-pane"
                role="tabpanel"
                aria-labelledby="day2-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day3-tab-pane"
                role="tabpanel"
                aria-labelledby="day3-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day4-tab-pane"
                role="tabpanel"
                aria-labelledby="day4-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day5-tab-pane"
                role="tabpanel"
                aria-labelledby="day5-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day6-tab-pane"
                role="tabpanel"
                aria-labelledby="day6-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
              <div
                className="tab-pane fade"
                id="day7-tab-pane"
                role="tabpanel"
                aria-labelledby="day7-tab"
                tabIndex={0}
              >
                <Slider {...setting} className="podcast-slider-two">
                  <div className="single-slide">
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s3.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s3.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s4.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s4.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s5.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s5.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s6.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s6.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s1.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s1.jpg"
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
                    <div className="podcast-item style-two link-item">
                      <a href="show-details.html" className="full-link"></a>
                      <div className="podcast-item-thumb">
                        <Image
                          width={306}
                          height={258}
                          src="/images/shows/podcast/s2.jpg"
                          alt="image"
                        />
                        <div className="thumb-content">
                          <p>09:00-10:AM</p>
                        </div>
                      </div>
                      <div className="podcast-item-content">
                        <div className="artist-thumb">
                          <Image
                            width={60}
                            height={60}
                            src="/images/artist/s2.jpg"
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
                </Slider>
                {/* <!-- podcast-slider end--> */}
              </div>
            </div>
            {/* <!-- tab-content end --> */}
          </div>
        </div>
      </div>
    </section>

    //  <!-- podcast section end -->
  );
};

export default PodcastSection;
