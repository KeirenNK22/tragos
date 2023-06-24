import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import Navbar from './components/nav';
import HeroSection from './components/hero';
import Content from './components/content';
function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box>
        <Navbar />
        <HeroSection />
        <Content />
      </Box>
    </ChakraProvider>
  );
}

export default App;