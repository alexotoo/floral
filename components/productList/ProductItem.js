import { useRouter } from "next/router";
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

import { useProductsStore } from "../../store/productsStore";

function ProductItem({ product }) {
  const { description, isInStock, price, title, image, type, id } = product;
  const addToCart = useCartStore((state) => state.addToCart);
  const getProductDetails = useProductsStore(
    (state) => state.getProductDetails
  );
  const router = useRouter();

  const saveAndRedirect = () => {
    // localStorage.setItem("grandmaProductDetails", JSON.stringify([product]));
    // getProductDetails();
    router.push(`/${id}`);
  };

  return (
    <Box maxW="sm" overflow="hidden" className="box-1" color="black" mb="2rem">
      <Box
        height="350px"
        cursor="pointer"
        overflow="hidden"
        onClick={saveAndRedirect}
      >
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
              onClick={() => addToCart({ id, image, price, title, qty: 1 })}
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
