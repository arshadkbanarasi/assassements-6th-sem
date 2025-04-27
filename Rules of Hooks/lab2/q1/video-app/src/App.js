import React, { useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import useYouTubeAPI from './hooks/useYouTubeAPI';
import usePlaylist from './hooks/usePlaylist';
import useAuthentication from './hooks/useAuthentication';
import useVideoPlayer from './hooks/useVideoPlayer';

const App = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useYouTubeAPI(query);
  const { user, login, logout } = useAuthentication();
  const { playlists, createPlaylist, addToPlaylist } = usePlaylist();
  const { isPlaying, playVideo, pauseVideo, seekVideo } = useVideoPlayer();

  return (
    <Box p={5}>
      <Input
        placeholder="Search videos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => login('username', 'password')}>Login</Button>
      {user && <Button onClick={logout}>Logout</Button>}

      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Box>
          {data.map((video) => (
            <Box key={video.id.videoId}>
              <Text>{video.snippet.title}</Text>
              <Button onClick={() => addToPlaylist('My Playlist', video)}>Add to Playlist</Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
