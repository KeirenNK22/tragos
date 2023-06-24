import React from 'react';
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

const Content = () => {
  return (
    <Box py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
        {/* Repeat the above box component two more times */}
        {/* Add your own content and customize as needed */}
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Content;