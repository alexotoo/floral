import {
  Text,
  Badge,
  Box,
  VStack,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@chakra-ui/button";
import { useCartStore } from "../../store/cartStore";
import { useCallback, useState } from "react";

function ProductItem({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { description, isInStock, price, title, image, type, id } = product;

  const cartToggleHandler = useCartStore((state) => state.cartToggler);

  // const cartCount = useCartStore((state) => state.cartCount);
  const cartItems = useCartStore(useCallback((state) => state.cartItems));
  const addToCart = useCartStore((state) => state.addToCart);

  console.log(cartItems);
  const updateCart = (item) => [...cartItems, item];

  const addToCartHandler = (cartitem) => {
    console.log(cartItems);
    if (!cartItems.length) {
      setIsInCart(true);
      addToCart(cartitem);
      localStorage.setItem(
        "grandmaCartItems",
        JSON.stringify(updateCart(cartitem))
      );
      console.log(cartItems);
      console.log("item added to cart 1");
      setIsInCart(false);
    } else if (cartItems.length > 0) {
      const checkItemIsInCart = cartItems.find((item) => item.id === id);
      if (checkItemIsInCart === undefined) {
        addToCart(cartitem);
        localStorage.setItem(
          "grandmaCartItems",
          JSON.stringify(updateCart(cartitem))
        );
        console.log("item added to cart 2");
        console.log(cartItems);
      } else {
        console.log("item in cart already 1");
      }
    } else {
      console.log("item in cart already 2");
    }
    cartToggleHandler();
  };

  return (
    <Box maxW="sm" overflow="hidden" className="box-1" color="black" mb="2rem">
      <Box height="350px" cursor="pointer" overflow="hidden">
        <Image src={image} width="100%" className="cardImage" height="100%" />
      </Box>

      <VStack textDecoration="none" mt="1rem" lineHeight="1">
        <Text fontWeight="bolder" fontSize="lg">
          ${price.toFixed(2).toLocaleString()}
        </Text>
        <Text as="h2" fontWeight="bolder">
          {title}
        </Text>
      </VStack>

      {isInStock ? (
        <Flex px="20px" mt="1rem">
          <Badge
            bg="inherit"
            my="1rem"
            p="1"
            borderWidth="1px"
            borderColor="black"
          >
            in stock
          </Badge>
          <Spacer />
          <Center fontSize="30px" _hover={{ cursor: "pointer" }}>
            <AiOutlineShoppingCart
              onClick={() =>
                addToCartHandler({ id, image, price, title, qty: 1 })
              }
            />
          </Center>
        </Flex>
      ) : (
        <Flex px="20px" mt="1rem">
          <Badge
            bg="inherit"
            my="1rem"
            p="1"
            borderWidth="1px"
            borderColor="black"
            color="red"
          >
            Out of Stock
          </Badge>
          <Spacer />
          <Center>
            <Button disabled bg="none" fontSize="30px">
              <AiOutlineShoppingCart />
            </Button>
          </Center>
        </Flex>
      )}
    </Box>
  );
}

export default ProductItem;
