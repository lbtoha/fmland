"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import latestMusicData from "../../../../public/data/latestMusicData";
import SingleAudioPlayer from "../homeTwo/SingleAudioPlayer";

const LatestMusic = () => {
  const [active, setActive] = useState(false);

  return (
    //   music show section start
    <section className="pt-120 pb-120 position-relative z-index2">
      <div className="top-dots">
        <Image
          width={133}
          height={287}
          src="/images/elements/top-dots.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Live Show</span>
              <h2 className="section-title">Latest Music</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row">
          <div className="col-lg-12 small-player-wrapper">
            {latestMusicData.map(({ id, ...props }, index) => (
              <SingleAudioPlayer key={id} trackNumber={index + 1} {...props} />
            ))}

            {/*  single-audio-player end  */}
          </div>
          <div className="col-lg-12 mt-5 text-center">
            <Link href="/show-schedule" className="btn btn-main">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
    // music show section end
  );
};

export default LatestMusic;
