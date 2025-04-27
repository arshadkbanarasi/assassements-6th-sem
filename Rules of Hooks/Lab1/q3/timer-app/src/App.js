import React from "react";
import { Button, Box, Heading, Text } from "@chakra-ui/react";
import useTimer from "./hooks/useTimer";

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <Box textAlign="center" mt={10}>
      <Heading mb={6}>Timer: {timer} seconds</Heading>
      <Text mb={4}>{isRunning ? "Timer is Running" : "Timer is Stopped"}</Text>
      <Button colorScheme="teal" mr={3} onClick={startTimer} disabled={isRunning}>
        Start Timer
      </Button>
      <Button colorScheme="red" mr={3} onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </Button>
      <Button colorScheme="blue" onClick={resetTimer}>
        Reset Timer
      </Button>
    </Box>
  );
}

export default App;
