"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Image from "next/image";
import Link from "next/link";

const Player = () => {
  const {
    playToggle,
    audioRef,
    progressBarRef,
    progress,
    duration,
    currentTime,
    handlePlayToggle,
    handleFastReverse,
    handleFastForward,
    handleProgressBarMouseDown,
    handleProgressBarMouseUp,
    handleProgressBarMouseLeave,
    handleProgressBarInteraction,
    handleProgressBarMouseMove,
    handleProgress,
  } = useAudioPlayer();

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

                <audio
                  onTimeUpdate={handleProgress}
                  ref={audioRef}
                  src="/audio/main.mp3"
                ></audio>
                <div className={`maudio ${playToggle && "playing"}`}>
                  <div className="audio-control">
                    <Link
                      href="javascript:;"
                      className="fast-reverse"
                      onClick={handleFastReverse}
                    ></Link>
                    <a
                      onClick={() => {
                        handlePlayToggle();
                      }}
                      href="javascript:;"
                      className={`play ${playToggle && "pause"}`}
                    ></a>
                    <Link
                      onClick={handleFastForward}
                      href="javascript:;"
                      className="fast-forward"
                    ></Link>
                    <div
                      className="progress-bar"
                      ref={progressBarRef}
                      onClick={handleProgressBarInteraction}
                      onMouseDown={handleProgressBarMouseDown}
                      onMouseUp={handleProgressBarMouseUp}
                      onMouseMove={handleProgressBarMouseMove}
                      onMouseLeave={handleProgressBarMouseLeave}
                    >
                      <div
                        className="progress-pass"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="time-keep">
                      <span className="current-time">
                        {formatTime(currentTime)}
                      </span>{" "}
                      / <span className="duration">{formatTime(duration)}</span>
                    </div>
                    <a className="mute"></a>
                    <div className="volume-bar">
                      <div className="volume-pass"></div>
                    </div>
                  </div>
                </div>
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

// Function to format time in MM:SS format
const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  return formattedTime;
};
