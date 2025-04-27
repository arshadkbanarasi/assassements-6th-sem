import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import useToggleItems from "./hooks/useToggleItems";

function App() {
  const [item, toggleItem] = useToggleItems(["A", "B", "C"], 1);

  return (
    <Box textAlign="center" mt={10}>
      <Heading mb={6}>Current Item: {item}</Heading>
      <Button colorScheme="teal" onClick={toggleItem}>
        Toggle Item
      </Button>
    </Box>
  );
}

export default App;
