import Link from "next/link";

import {
  Flex,
  Center,
  Text,
  Circle,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/layout";

import { AiOutlineShoppingCart } from "react-icons/ai";
import NavDrawer from "./NavDrawer";

import UserLogInLogOut from "./UserLogInLogOut";

export default function Navbar() {
  return (
    <Flex color="white" w="100%" bg="black" h="70px" px="2rem" boxShadow="base">
      <HStack>
        <Center>
          <NavDrawer />
        </Center>
        <Center as="h2" color="gold" fontSize="large" fontWeight="bolder">
          <Link href="/">
            <a className="logo" _hover={{ textDecoration: "none" }}>
              Grandma's SHop
            </a>
          </Link>
        </Center>
      </HStack>
      <Spacer />
      <HStack>
        <Center>
          <UserLogInLogOut />
        </Center>
        <Spacer />
        <Center>
          <VStack lineHeight=".25">
            <Text>50</Text>
            <AiOutlineShoppingCart size="1.5rem" />
          </VStack>{" "}
        </Center>
      </HStack>
    </Flex>
  );
}
