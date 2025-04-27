import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../redux/actions';
import { Box, Spinner, Text, Grid, GridItem } from '@chakra-ui/react';

const FootballMatches = () => {
  const dispatch = useDispatch();
  const { isLoading, footballMatches, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>Error loading matches</Text>;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {footballMatches.map((match) => (
        <GridItem key={match.id} border="1px solid #ddd" p={4}>
          <Text fontWeight="bold">{match.team1} vs {match.team2}</Text>
          <Text>Date: {match.date}</Text>
          <Text>Venue: {match.venue}</Text>
          <Text>Score: {match.team1goals} - {match.team2goals}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default FootballMatches;
