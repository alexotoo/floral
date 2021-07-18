import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center } from "@chakra-ui/layout";
import {
  VStack,
  List,
  Text,
  ListItem,
  HStack,
  Spacer,
  Flex,
  Box,
} from "@chakra-ui/layout";

import { useEffect, useState } from "react";

import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import ModelOverlay from "./ModelOverlay";

const CartDrawer = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const cartToggleHandler = useCartStore((state) => state.cartToggler);

  const getInitialCartItems = useCartStore(
    (state) => state.getInitialCartItems
  );
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
  const updateQty = useCartStore((state) => state.updateQty);

  const length = cartItems.length;

  useEffect(() => {
    const initialCartItems = localStorage.getItem("grandmaCartItems")
      ? JSON.parse(localStorage.getItem("grandmaCartItems"))
      : [];
    getInitialCartItems(initialCartItems);
  }, [length]);

  return (
    <>
      <ModelOverlay toggleOverlay={cartToggleHandler} />
      <VStack
        height="100vh"
        bg="white"
        position="fixed"
        zIndex="99"
        right="0"
        top="0"
        className={isCartOpen ? "cartModel" : "cartBox "}
      >
        <HStack bg=" #001" width="100%" color="white" h="100px" px="2rem">
          <Text _hover={{ cursor: "pointer" }}>
            <FaChevronRight onClick={cartToggleHandler} />
          </Text>
          <Spacer />
          <Text fontSize="2rem">Cart</Text>
        </HStack>
        <Box px="1rem" width="100%" color="black" height="70px" py="2">
          {cartItems.length === 0 ? (
            <Center>
              <Text>Your Cart is Empty</Text>
            </Center>
          ) : (
            <HStack fontWeight="bold">
              <Text>{cartItems.length} Product(s)</Text>
              <Spacer />
              <Text>
                Subtotal: ${" "}
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </Text>
            </HStack>
          )}
        </Box>
        <Box
          px="2rem"
          width="100%"
          color="black"
          borderBottom="1px"
          borderColor="blackAlpha.300"
          height="130px"
          px="1rem"
        >
          {cartItems.length ? (
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              color="white"
            >
              <Link href="/">
                <Button
                  onClick={cartToggleHandler}
                  borderRadius="none"
                  marginBottom="1rem"
                  width={{ md: "200px" }}
                  bg="gray.600"
                  _hover={{ bg: "gray.500" }}
                >
                  Continue shopping
                </Button>
              </Link>
              <Button
                borderRadius="none"
                width={{ md: "200px" }}
                bg="orange.400"
                _hover={{ bg: "orange.300" }}
              >
                Checkout
              </Button>
            </Flex>
          ) : (
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              color="white"
            >
              <Button
                borderRadius="none"
                marginBottom="1rem"
                width={{ md: "200px" }}
                bg="gray.600"
                _hover={{ bg: "gray.500" }}
              >
                Sign In
              </Button>
              <Link href="/">
                <Button
                  onClick={cartToggleHandler}
                  borderRadius="none"
                  width={{ md: "200px" }}
                  bg="orange.400"
                  _hover={{ bg: "orange.300" }}
                >
                  Start Shopping
                </Button>
              </Link>
            </Flex>
          )}
        </Box>

        {cartItems && (
          <Box overflow="scroll">
            <List px="1rem">
              {cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  borderBottom="1px"
                  borderColor="gray.300"
                  marginBottom="1rem"
                  cartitem={item}
                >
                  {" "}
                  <HStack marginBottom="1rem" color="black">
                    <Image src={item.image} width="20%" />
                    <VStack minW="50%">
                      <Text fontWeight="bold">{item.title}</Text>
                      <Box>
                        <HStack>
                          <Button
                            isDisabled={item.qty <= 1}
                            onClick={() => updateQty(item.id, "dec")}
                          >
                            -
                          </Button>
                          <Text>{item.qty}</Text>
                          <Button onClick={() => updateQty(item.id, "inc")}>
                            +
                          </Button>
                        </HStack>
                      </Box>
                    </VStack>
                    <VStack>
                      <Button onClick={() => removeItemFromCart(item.id)}>
                        x
                      </Button>
                      <Text fontWeight="bold">
                        ${(item.price * item.qty).toFixed(2)}
                      </Text>
                    </VStack>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </VStack>
    </>
  );
};

export default CartDrawer;
