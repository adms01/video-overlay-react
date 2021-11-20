import React from "react";

function VideoPlayer() {
  return (
    <div>
      <video className="video-player" controls autoPlay>
        <source src="./Big_Buck_Bunny_1080_10s_5MB.mp4" type="video/mp4" /> Sorry, your browser doesn't support embedded videos
      </video>
    </div>
  );
}

export default VideoPlayer;
