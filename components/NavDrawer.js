import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Center,
  Link,
  Text,
} from "@chakra-ui/react";
import { Flex, Circle, HStack, Spacer } from "@chakra-ui/layout";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg="transparent"
        p="0"
        _hover={{ bg: "transparent", color: "gray.500" }}
        fontSize="1.25rem"
      >
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg=" #001">
              {" "}
              <Center h="38px">
                <Text as="h2" color="gold" fontSize="large" fontWeight="bolder">
                  Grandma's SHop
                </Text>
              </Center>
            </DrawerHeader>

            <DrawerBody></DrawerBody>
            <DrawerFooter bg=" #001">
              <HStack paddingRight="4rem">
                <Text color="white" fontWeight="bolder">
                  Follow
                </Text>
                <Circle
                  size="30px"
                  color="white"
                  bg="yellow.400"
                  _hover={{ bg: "gold" }}
                >
                  <a href="#">
                    {" "}
                    <FaFacebook />
                  </a>
                </Circle>
                <Circle
                  size="30px"
                  color="white"
                  bg="yellow.400"
                  _hover={{ bg: "gold" }}
                >
                  <a href="#">
                    <FaInstagram />
                  </a>
                </Circle>
                <Circle
                  size="30px"
                  color="white"
                  bg="yellow.400"
                  _hover={{ bg: "gold" }}
                >
                  <a href="#">
                    <FaTwitter />
                  </a>
                </Circle>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
