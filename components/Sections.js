import { Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";

const Sections = ({ section, children, bg }) => {
  return (
    <Container
      minW="100vw"
      minH="100vh"
      bg={bg}
      px="5rem"
      pt="6rem"
      position="relative"
      mt="6rem"
    >
      <Center
        bg="inherit"
        borderWidth="1px"
        borderColor="black"
        width="200px"
        height="50px"
        position="absolute"
        top="-1"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text as="h2" fontSize="2rem" letterSpacing="wider">
          {section}
        </Text>
      </Center>
      {children}
    </Container>
  );
};

export default Sections;
