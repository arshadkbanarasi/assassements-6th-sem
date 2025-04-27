import React, { useState } from 'react';
import FootballMatches from './components/FootballMatches';
import SearchBar from './components/SearchBar';
import FavoriteMatches from './components/FavoriteMatches';
import { Box, VStack } from '@chakra-ui/react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <SearchBar onSearch={handleSearch} />
      <FootballMatches searchQuery={searchQuery} />
      <FavoriteMatches favoriteMatches={[]} /> {/* Connect to Redux state for favorites */}
    </VStack>
  );
};

export default App;
