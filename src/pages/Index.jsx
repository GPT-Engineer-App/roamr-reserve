import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Welcome to Travel Booking
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Book your flights, hotels, and car rentals all in one place.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaPlane size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Flights
            </Heading>
            <Text mb={4}>Find and book flights to your favorite destinations.</Text>
            <Button colorScheme="teal">Book Flights</Button>
          </Box>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaHotel size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Hotels
            </Heading>
            <Text mb={4}>Discover and reserve the best hotels.</Text>
            <Button colorScheme="teal">Book Hotels</Button>
          </Box>
          <Box textAlign="center" p={5} m={2} borderWidth="1px" borderRadius="lg">
            <FaCar size="3em" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Car Rentals
            </Heading>
            <Text mb={4}>Rent a car for your travel needs.</Text>
            <Button colorScheme="teal">Rent a Car</Button>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;