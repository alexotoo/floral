import { Container, Flex, HStack, Link, Text } from "@chakra-ui/layout";
import {
  AiFillSlackCircle,
  AiFillTwitterCircle,
  AiFillRedditCircle,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  let today = new Date();
  return (
    <Container
      maxW="container.xg"
      textAlign="center"
      bg=" #001"
      color="white"
      overflow="hidden"
      mt="2rem"
    >
      <Flex
        justifyContent="space-between"
        py="2rem"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
          <Text fontSize={{ base: "1rem", md: "2rem" }}>Grandma's Shop</Text>
        </Flex>
        <Flex py="4">
          <Link
            px="10px"
            _hover={{ color: "yellow.200", textDecoration: "none !important" }}
          >
            Home
          </Link>
          <Link
            px="10px"
            _hover={{ color: "yellow.200", textDecoration: "none !important" }}
          >
            About Us
          </Link>
          <Link
            px="10px"
            _hover={{ color: "yellow.200", textDecoration: "none !important" }}
          >
            Blog
          </Link>
          <Link
            px="10px"
            _hover={{ color: "yellow.200", textDecoration: "none !important" }}
          >
            {" "}
            contact Us
          </Link>
        </Flex>
        <Flex>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "yellow.200", transform: "scale(1.25)" }}
          >
            <AiFillSlackCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "yellow.200", transform: "scale(1.25)" }}
          >
            <AiFillTwitterCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "yellow.200", transform: "scale(1.25)" }}
          >
            <AiFillRedditCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "yellow.200", transform: "scale(1.25)" }}
          >
            <AiFillGithub fontSize="2rem" />
          </Link>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        borderTop="1px"
        borderColor="whiteAlpha.400"
        py="3rem"
        color="whiteAlpha.600"
      >
        <Text>Privacy & Policy</Text>

        <Text>Developed by AlexOoo</Text>
        <Text> right reserved {today.getFullYear()}</Text>
      </Flex>
    </Container>
  );
}
