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
import { useCartStore } from "../store/cartStore";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const cartItems = useCartStore((state) => state.cartItems);
  const cartToggleHandler = useCartStore((state) => state.cartToggler);

  return (
    <Flex color="white" w="100%" bg="black" h="70px" px="2rem" boxShadow="base">
      <CartDrawer />
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
          <VStack lineHeight=".25" _hover={{ cursor: "pointer" }}>
            <Text>{cartItems.length}</Text>
            <AiOutlineShoppingCart size="1.5rem" onClick={cartToggleHandler} />
          </VStack>{" "}
        </Center>
      </HStack>
    </Flex>
  );
}
