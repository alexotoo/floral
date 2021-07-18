import { createClient } from "contentful";
import { Center, Container, Text, Box, Flex, HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Link from "next/link";

import { useCartStore } from "../store/cartStore";

export default function productdetails() {
  const { query, push } = useRouter();
  let id = query.productdetails;
  const [product, setproduct] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function getSingledata() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_DATA_SPACE,
          accessToken: process.env.NEXT_PUBLIC_DATA_KEY,
          environment: process.env.NEXT_PUBLIC_DATA_ENV,
          // content_type: process.env.NEXT_PUBLIC_DATA_CONT_TYPE,
        });
        const singleProduct = await client.getEntry(id);
        // const retrivedProduct = JSON.stringify(singleProduct);

        setproduct(singleProduct);
      } catch (error) {
        push("/");
      }
    }
    getSingledata();
  }, []);

  return (
    <Container maxW="container.xl" minH="100vh">
      {!product ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gold"
          size="xl"
        />
      ) : (
        <Container maxW="container.xl">
          <Center my="2rem">
            <Text fontWeight="bold" fontSize="2.5rem">
              {product.fields.title}
            </Text>
          </Center>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box width={{ md: "50%" }}>
              <Image src={product.fields.image.fields.file.url} />
            </Box>
            <Box width={{ md: "50%" }} px="1rem">
              <HStack bg="white" w="100%">
                <Text fontWeight="bold" fontSize="2rem">
                  {" "}
                  ${product.fields.price}
                </Text>
                <Text>{product.fields.isInStock}</Text>
              </HStack>
              <Box w="100%" py="1rem">
                {product.fields.isInStock ? (
                  <Button
                    bg="orange.400"
                    _hover={{ bg: "orange.500" }}
                    w="50%"
                    onClick={() =>
                      addToCart({
                        id,
                        image: product.fields.image.fields.file.url,
                        price: product.fields.price,
                        title: product.fields.title,
                        qty: 1,
                      })
                    }
                  >
                    {" "}
                    Add To Cart
                  </Button>
                ) : (
                  <Button
                    disabled
                    bg="orange.400"
                    _hover={{ bg: "orange.500" }}
                    w="50%"
                  >
                    {" "}
                    Out of Stock
                  </Button>
                )}
              </Box>
              <Box mt="1rem" minh="50vh" fontSize="1.5rem">
                <Text fontWeight="bold">Product Details:</Text>
                <Text> {product.fields.description}</Text>
                <Link href="/">
                  <Button
                    mt="2rem"
                    marginBottom="1rem"
                    w="50%"
                    bg="gray.500"
                    _hover={{ bg: "gray.600" }}
                  >
                    Back
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Container>
      )}
    </Container>
  );
}
