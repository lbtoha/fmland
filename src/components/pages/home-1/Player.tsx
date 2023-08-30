"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const Player = () => {
  const audioControl = useRef<ReactPlayer | null>(null);
  const [playToggle, setPlayToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  let totalTime = audioControl?.current?.getDuration();
  const totalChunks =
    totalTime !== undefined &&
    parseInt(((currentTime / totalTime) * 100).toString());

  let progressBarWidth = totalChunks * 10;
  let props = audioControl?.current?.props;

  console.log(props);

  const getTimeFunction = () => {
    setPlayToggle(!playToggle);
    // Check if the audioControl ref exists and the player is playing
    if (playToggle == true) {
      // Use setInterval to update currentTime every second
      const intervalId = setInterval(() => {
        const newCurrentTime = audioControl?.current?.getCurrentTime();
        if (newCurrentTime !== undefined) {
          setCurrentTime(newCurrentTime);
        }
      }, 1000); // Update every second
      return () => clearInterval(intervalId);
    }
    // Cleanup the interval when the component unmounts or when playToggle changes
  };

  return (
    // <!-- player section start -->
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

                <ReactPlayer
                  width={0}
                  height={0}
                  controls
                  // onSeek={}
                  playing={playToggle}
                  url="/audio/main.mp3"
                  ref={audioControl}
                  config={{
                    file: {
                      forceAudio: true,
                    },
                  }}
                />
                <div className={`maudio ${playToggle && "playing"}`}>
                  <div className="audio-control">
                    <a href="javascript:;" className="fast-reverse"></a>
                    <a
                      onClick={() => {
                        getTimeFunction();
                        // setPlayToggle(!playToggle);
                      }}
                      href="javascript:;"
                      className="play"
                    ></a>
                    <a href="javascript:;" className="fast-forward"></a>
                    <div className="progress-bar" style={{ width: "50%" }}>
                      <div
                        className="progress-pass"
                        style={{ width: progressBarWidth }}
                      ></div>
                    </div>
                    <div className="time-keep">
                      <span className="current-time">01:42</span> /
                      <span className="duration">01:42</span>
                    </div>
                    <a className="mute"></a>
                    <div className="volume-bar">
                      <div className="volume-pass"></div>
                    </div>
                  </div>
                </div>
                {/* @ts-ignore */}
                {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <!-- player section end -->
  );
};

export default Player;
