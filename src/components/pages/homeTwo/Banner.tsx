"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Image from "next/image";

const Banner = () => {
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
    // <!-- banner section start -->
    <section
      className="banner-section style-two"
      style={{ backgroundImage: "url('/images/bg/banner-bg2.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6 text-lg-end text-center">
            <h2 className="banner-title">
              Listen FM.Land <span>92.0</span>
            </h2>
            <p className="banner-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="single-audio-player style-two">
              <div className="single-audio-thumb">
                <Image
                  width={196}
                  height={140}
                  src="/images/shows/player/2.jpg"
                  alt="image"
                />
              </div>
              <div className="single-audio-content">
                <div className="single-audio-content-top">
                  <h4 className="title">The Live Love Show</h4>
                  <p className="audio-time">
                    RJ Alex 1:15-2:45 PM
                    <span className="live-status">Live</span>
                  </p>
                </div>

                <div className={`maudio ${playToggle && "playing"}`}>
                  <audio
                    onTimeUpdate={handleProgress}
                    ref={audioRef}
                    src="/audio/main.mp3"
                  ></audio>
                  <div className="audio-control">
                    <a
                      onClick={handleFastReverse}
                      href="javascript:;"
                      className="fast-reverse"
                    ></a>
                    <a
                      onClick={handlePlayToggle}
                      href="javascript:;"
                      className="play"
                    ></a>
                    <a
                      href="javascript:;"
                      onClick={handleFastForward}
                      className="fast-forward"
                    ></a>
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
                      <span className="current-time">00:02</span> /
                      <span className="duration">01:42</span>
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

    //  <!-- banner section end -->
  );
};

export default Banner;
