import { useRef, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdateHandler = () => {
    const timestamp = videoRef.current.currentTime * 1000;
    setCurrentTime(timestamp);
  };

  return (
    <div>
      <video className="video-player" ref={videoRef} onTimeUpdate={onTimeUpdateHandler} controls autoPlay>
        <source src="./Big_Buck_Bunny_1080_10s_5MB.mp4" type="video/mp4" /> Sorry, your browser doesn't support embedded videos
      </video>
    </div>
  );
}

export default VideoPlayer;
