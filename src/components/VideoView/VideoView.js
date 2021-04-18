import { useState, useEffect } from "react";
import { video_view } from "./VideoView.module.scss";

// Api
import { VideoById } from "../../services/api";

const VideoView = ({ id }) => {
  const [videoKey, setVideoKey] = useState([]);

  useEffect(() => {
    VideoById(id).then(({ results }) => {
      const key = results[0].key;
      setVideoKey(key);
    });
    // eslint-disable-next-line
  }, []);

  const videoSrc = videoKey && `https://www.youtube.com/embed/${videoKey}`;

  return (
    <div className={video_view}>
      {videoKey && (
        <iframe
          width="400"
          height="auto"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoView;
