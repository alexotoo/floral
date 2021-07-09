import { createClient } from "contentful";
import { Center, Container, Text, Box, Flex, HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function productdetails() {
  const { query, push } = useRouter();
  let id = query.productdetails;
  const [product, setproduct] = useState(null);

  useEffect(() => {
    async function getSingledata() {
      try {
        console.log(id);
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

  console.log(id);
  console.log(product);

  return (
    <>
      {!product ? (
        <h1>loading</h1>
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
                <Button bg="orange.400" w="50%">
                  {" "}
                  Add To Cart
                </Button>
              </Box>
              <Box mt="1rem" minh="50vh" fontSize="1.5rem">
                <Text fontWeight="bold">Product Details:</Text>
                <Text> {product.fields.description}</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      )}
    </>
  );
}
