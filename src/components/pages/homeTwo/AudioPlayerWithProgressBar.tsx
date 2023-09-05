"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Link from "next/link";

const AudioPlayerWithProgressBar = ({
  audio = "/audio/main.mp3",
}: {
  audio: string;
}) => {
  const {
    playToggle,
    audioRef,
    progressBarRef,
    progress,
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
    <div className={`maudio ${playToggle && "playing"}`}>
      <audio onTimeUpdate={handleProgress} ref={audioRef} src={audio}></audio>
      <div className="audio-control">
        <Link
          onClick={handleFastReverse}
          href="javascript:;"
          className="fast-reverse"
        ></Link>
        <Link
          onClick={handlePlayToggle}
          href="javascript:;"
          className="play"
        ></Link>
        <Link
          href="javascript:;"
          onClick={handleFastForward}
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
      </div>
    </div>
  );
};

export default AudioPlayerWithProgressBar;
