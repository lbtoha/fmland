"use client";
import Image from "next/image";
import Slider from "react-slick";

const Sponsor = () => {
  const setting = {
    infinite: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    //
    //  sponsor section start
    <section className="pt-120 pb-120">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Sponsors</span>
              <h2 className="section-title">Our Lovely Pratner</h2>
            </div>
          </div>
        </div>
        {/* 
        //  row end  */}
        <Slider {...setting} className="sponsor-slider">
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/1.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/2.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/3.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/4.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/5.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/6.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/1.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={156}
                height={42}
                src="/images/sponsors/2.png"
                alt="image"
              />
            </div>
          </div>
          {/*  single-slide end  */}
        </Slider>
        {/*  sponsor-slider end  */}
      </div>
    </section>

    //  sponsor section end  *
  );
};

export default Sponsor;
