import React, { useState, useEffect } from "react";

import "./styles.css";
import Fade from "./Fade";

type VideoDetailProps = {
  video: any;
  isOpen: boolean;
};

const VideoDetail = ({ video, isOpen }: VideoDetailProps) => {
  return (
    <Fade show={isOpen}>
      <div> Here is a video detail section </div>
    </Fade>
  );
};

export default VideoDetail;
