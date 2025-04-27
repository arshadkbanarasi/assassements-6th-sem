import React from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <ChakraProvider>
      <Box p={6}>
        <Heading mb={6}>Register Form</Heading>
        <RegisterForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
