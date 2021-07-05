import { Center, Container, Text, Box, Flex, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { useRouter } from "next/router";
import { useProductsStore } from "../store/productsStore";

const productdetails = () => {
  const products = useProductsStore((state) => state.products);
  const { query } = useRouter();
  const productDetails = products.filter(
    (item) => query.productdetails === item.sys.id
  );
  console.log(productDetails);

  const product = productDetails.map((product) => {
    const { id } = product.sys;
    const { description, isInStock, price, title, type } = product.fields;
    const image = product.fields.image.fields.file.url;
    return { id, description, isInStock, price, title, type, image };
  });
  console.log(product);
  return (
    <Container>
      <Center my="2rem">
        <Text fontWeight="bold" fontSize="2rem">
          {product[0].title}
        </Text>
      </Center>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Image src={product[0].image} />
        <Box width={{ md: "50%" }}>
          <HStack>
            <Text> ${product[0].price}</Text>
            <Text>{product[0].isInStock}</Text>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default productdetails;
