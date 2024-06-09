import { Box, Container, Flex, Heading, Input, VStack, Text, Image, HStack, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="blue.600" color="white" borderRadius="md">
        <Heading as="h1" size="lg">TravelBook</Heading>
        <HStack spacing={4}>
          <Button variant="ghost" colorScheme="whiteAlpha">Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">Destinations</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">Contact</Button>
        </HStack>
      </Flex>

      {/* Search Bar */}
      <VStack spacing={4} mb={8}>
        <Heading as="h2" size="md">Find Your Next Destination</Heading>
        <Flex w="100%" maxW="600px">
          <Input placeholder="Search for destinations" borderRightRadius="0" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" borderLeftRadius="0">Search</Button>
        </Flex>
      </VStack>

      {/* Featured Destinations */}
      <VStack spacing={8}>
        <Heading as="h2" size="lg" mb={4}>Featured Destinations</Heading>
        <Flex wrap="wrap" justify="space-around">
          <Box w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/300" alt="Destination 1" />
            <Box p={4}>
              <Heading as="h3" size="md">Destination 1</Heading>
              <Text mt={2}>Explore the beauty of Destination 1.</Text>
            </Box>
          </Box>
          <Box w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/300" alt="Destination 2" />
            <Box p={4}>
              <Heading as="h3" size="md">Destination 2</Heading>
              <Text mt={2}>Discover the wonders of Destination 2.</Text>
            </Box>
          </Box>
          <Box w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/300" alt="Destination 3" />
            <Box p={4}>
              <Heading as="h3" size="md">Destination 3</Heading>
              <Text mt={2}>Experience the charm of Destination 3.</Text>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;