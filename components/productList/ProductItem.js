import { Badge } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Spacer } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useCartStore } from "../../store/cartStore";
import { useCallback, useState } from "react";

function ProductItem({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { description, isInStock, price, title, image, type, id } = product;

  // const cartCount = useCartStore((state) => state.cartCount);
  const cartItems = useCartStore(useCallback((state) => state.cartItems));
  const addToCart = useCartStore((state) => state.addToCart);

  const checkIsInCart = (idd) =>
    cartItems.filter((item) => item.id !== id).map((item) => item.id);

  // console.log(cartItems);

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
            {console.log(checkIsInCart().includes(id))}
            <AiOutlineShoppingCart
              onClick={() => addToCart(id, image, price, title)}
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
