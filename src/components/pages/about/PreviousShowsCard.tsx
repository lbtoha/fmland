"use client";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

const PreviousShowsCard = () => {
  const [playToggle, setPlayToggle] = useState(false);
  return (
    <div className="single-slide">
      <div className="show-item style-two">
        <div className="thumb">
          <Image
            width={288}
            height={300}
            src="/images/shows/previous/4.jpg"
            alt="image"
          />
        </div>
        <div className={`maudio ${playToggle && "playing"}`}>
          <ReactPlayer
            width={0}
            height={0}
            controls
            playing={playToggle}
            url="/audio/main.mp3"
            config={{
              file: {
                forceAudio: true,
              },
            }}
          />
          <div className="audio-control">
            <a href="javascript:;" className="fast-reverse"></a>
            <a
              onClick={() => {
                setPlayToggle(!playToggle);
              }}
              href="javascript:;"
              className="play"
            ></a>
            <a href="javascript:;" className="fast-forward"></a>
            <div className="progress-bar">
              <div className="progress-pass"></div>
            </div>
            <div className="time-keep">
              <span className="current-time">00:00</span> /
              <span className="duration">00:00</span>
            </div>
            <a className="mute"></a>
            <div className="volume-bar">
              <div className="volume-pass"></div>
            </div>
          </div>
        </div>
        <div className="show-item-content">
          <div className="show-item-top">
            <h5 className="show-item-top-title">“Music Of Life”</h5>
            <span className="show-item-duration">24min</span>
          </div>
          <div className="artist-thumb">
            <Image
              width={86}
              height={86}
              src="/images/artist/1.jpg"
              alt="image"
            />
          </div>
          <div className="artist-content">
            <h5 className="show-name">Life Music</h5>
            <p className="artist-name">Rj Movin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousShowsCard;
