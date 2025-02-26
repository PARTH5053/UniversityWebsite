import "./VideoPlayer.css";
import React from "react";
import video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  //   const player = useRef();
  //   const closePlayer = (event) => {
  //     if (event.target === player.current) {
  //       setPlayState(false);
  //     }
  //   };
  return (
    <div
      className="videoPlayer" /*{`videoPlayer ${playState ? "" : "hide"}`}*/
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
