"use client";
import Image from "next/image";
import AudioPlayerWithProgressBar from "../homeTwo/AudioPlayerWithProgressBar";

const Player = () => {
  return (
    //  player section start
    <section className="player-section section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-audio-player">
              <div className="single-audio-thumb">
                <Image
                  src="/images/shows/player/1.jpg"
                  width={196}
                  height={240}
                  alt="image"
                />
              </div>
              <div className="single-audio-content">
                <h4 className="title">The Live Love Show</h4>
                <p className="audio-time">
                  RJ Alex 1:15-2:45 PM <span className="live-status">Live</span>
                </p>
                <AudioPlayerWithProgressBar audio="/audio/main.mp3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   player section end
  );
};

export default Player;
