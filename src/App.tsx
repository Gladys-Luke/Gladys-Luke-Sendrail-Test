import React from "react";
import { ChakraProvider, Flex, Box, extendTheme } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import Courier from "./components/courier";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        "*:focus": {
          outline: "none",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Box h="100vh">
          <Sidebar />
        </Box>
        <Box flex="1" p={4}>
          <Courier />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
