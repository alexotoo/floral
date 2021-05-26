import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";

const HeroSection = () => {
  return (
    <Container
      height="80vh"
      minW="100vw"
      mb="4rem"
      px="2rem"
      className="hero"
      pt="4rem"
    >
      <Box
        textAlign={{ base: "center", md: "right" }}
        pl={{ md: "15rem", lg: "30rem" }}
      >
        <Text
          as="h1"
          textTransform="capitalize"
          fontWeight="bolder"
          fontSize="3rem"
        >
          Grandmas's cakes and floral
        </Text>
        <Text fontWeight="light" fontSize="1.2rem" pl="7rem" mt="1rem">
          Make any occasion Sweet and colorful with full joy, love from our
          lovely cakes and folowers
        </Text>
        <Button
          mt="1rem"
          bg="black"
          borderRadius="none"
          width="200px"
          color="white"
          transition="ease-out 500ms"
          _hover={{ bg: "teal" }}
        >
          BUY HERE
        </Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
