import { useState } from 'react';

const useVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playVideo = () => setIsPlaying(true);
  const pauseVideo = () => setIsPlaying(false);
  const seekVideo = (time) => setCurrentTime(time);

  return { isPlaying, currentTime, playVideo, pauseVideo, seekVideo };
};

export default useVideoPlayer;
