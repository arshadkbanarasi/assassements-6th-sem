import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API Key

const useYouTubeAPI = (query, filters = {}, pageToken = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(pageToken);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: query,
            key: API_KEY,
            pageToken: nextPageToken,
            ...filters
          }
        });
        setData(prevData => [...prevData, ...response.data.items]);
        setNextPageToken(response.data.nextPageToken);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [query, filters, nextPageToken]);

  return { data, loading, error, nextPageToken };
};

export default useYouTubeAPI;
