import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";

const HeroSection = () => {
  return (
    <Flex
      minW="100vw"
      height="80vh"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box className="cakes  hero-box">
        <Button variant="outline" borderRadius="0" className="hero-btn">
          Shop Cakes
        </Button>
      </Box>
      <Box className="flowers hero-box">
        <Button variant="outline" borderRadius="0" className="hero-btn">
          Shop Flowers
        </Button>
      </Box>
    </Flex>
  );
};

export default HeroSection;
