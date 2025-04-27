import { useState } from 'react';

const usePlaylist = () => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (name) => {
    setPlaylists([...playlists, { name, videos: [] }]);
  };

  const addToPlaylist = (playlistName, video) => {
    setPlaylists(prev =>
      prev.map(playlist =>
        playlist.name === playlistName
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      )
    );
  };

  const removeFromPlaylist = (playlistName, videoId) => {
    setPlaylists(prev =>
      prev.map(playlist =>
        playlist.name === playlistName
          ? { ...playlist, videos: playlist.videos.filter(v => v.id !== videoId) }
          : playlist
      )
    );
  };

  return { playlists, createPlaylist, addToPlaylist, removeFromPlaylist };
};

export default usePlaylist;
    