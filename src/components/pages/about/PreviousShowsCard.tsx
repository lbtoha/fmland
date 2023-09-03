"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Image from "next/image";
import Link from "next/link";

const PreviousShowsCard = () => {
  const { playToggle, audioRef, handlePlayToggle, handleProgress } =
    useAudioPlayer();
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
          <audio
            onTimeUpdate={handleProgress}
            ref={audioRef}
            src="/audio/main.mp3"
          ></audio>
          <div className="audio-control">
            <Link
              onClick={() => {
                handlePlayToggle();
              }}
              href="javascript:;"
              className={`play ${playToggle && "pause"}`}
            ></Link>
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
