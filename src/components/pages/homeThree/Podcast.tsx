import podcastScheduleCardData from "@/../public/data/podcastScheduleCardData";
import Image from "next/image";
import PodcastCard from "./PodcastCard";

const Podcast = () => {
  return (
    //
    //   podcast section start
    <section
      className="pt-120 pb-120 dark-overlay position-relative z-index2"
      style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}
    >
      <div className="left-el">
        <Image
          width={148}
          height={148}
          src="/images/elements/el_plus.png"
          alt="image"
        />
      </div>
      <div className="right-el">
        <Image
          width={394}
          height={436}
          src="/images/elements/right-dot-circle.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Show</span>
              <h2 className="section-title">Top Live Show</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-4">
          {podcastScheduleCardData.slice(0, 4).map(({ id, ...props }) => (
            <PodcastCard key={id} {...props} />
          ))}
        </div>
        {/*  podcast-slider end */}
      </div>
    </section>
    //
    //   podcast section end
  );
};

export default Podcast;
