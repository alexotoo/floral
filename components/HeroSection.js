import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import Link from "next/link";

const HeroSection = ({
  handleScrollFlowersToView,
  handleScrollCakesToView,
}) => {
  return (
    <Flex
      minW="100vw"
      height="80vh"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box className="cakes hero-box">
        <Button
          variant="outline"
          borderRadius="0"
          className="hero-btn btn-cake"
          onClick={handleScrollCakesToView}
        >
          Shop Cakes
        </Button>
      </Box>
      <Box className="flowers hero-box btn-flower">
        <Link href="">
          <Button
            variant="outline"
            borderRadius="0"
            className="hero-btn"
            onClick={handleScrollFlowersToView}
          >
            Shop Flowers
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HeroSection;
