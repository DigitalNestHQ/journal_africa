import React from "react";

// import Song from "./Song";
// import Play from "./Play";
// import Pause from "./Pause";
import Bar from "./../currentPodcast/Bar";
import playImage from "./../../../assets/images/play.png";
import pauseImage from "./../../../assets/images/pause.png";

import useAudioPlayer from "./useAudioPlayer";

function Audio() {
  const { curTime, duration, playing, setPlaying, setClickedTime, startTimer } =
    useAudioPlayer();
  const handlePlayerClick = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  return (
    <div className="players">
      <img
        src={playing ? playImage : playImage}
        className={`play_pod_image ${playing && "rotating-disc"}`}
        onClick={() => handlePlayerClick()}
      />
      <audio id="audio">
        <source src="" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {/* <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/> */}
      </div>
    </div>
  );
}

export default Audio;
