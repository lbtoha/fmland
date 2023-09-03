"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import AudioPlayerWithProgressBar from "./AudioPlayerWithProgressBar";

type Props = {
  image: StaticImageData;
  trackNumber: number;
  title: string;
  audio: string;
};

const SingleAudioPlayer = ({ image, trackNumber, title, audio }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="single-audio-player style-two style-sm">
      <div className="single-audio-thumb">
        <Image width={120} height={120} src={image} alt="image" />
        <span className="single-audio-serial">0{trackNumber}</span>
      </div>

      <div className="single-audio-content">
        <div className="single-audio-content-top">
          <h4 className="title">“The Live Love”</h4>
          <span className="live-status">Pop</span>
          <button
            onClick={() => setActive(!active)}
            type="button"
            className={`bookmark-icon ${active ? "active" : ""}`}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
        <AudioPlayerWithProgressBar audio={audio} />
      </div>
    </div>
    //  single-audio-player end
  );
};

export default SingleAudioPlayer;
