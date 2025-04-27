import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FavoriteMatches = ({ favoriteMatches }) => {
  return (
    <Box>
      <Text fontWeight="bold">Favorite Matches</Text>
      {favoriteMatches.length === 0 ? (
        <Text>No favorites yet</Text>
      ) : (
        favoriteMatches.map((match) => (
          <Box key={match.id} p={4} border="1px solid #ddd" my={2}>
            <Text>{match.team1} vs {match.team2}</Text>
            <Text>Date: {match.date}</Text>
            <Text>Venue: {match.venue}</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default FavoriteMatches;
