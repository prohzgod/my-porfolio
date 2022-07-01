import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaGoogleDrive, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#20202380", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <NavLink to="/my-porfolio">
            <Heading as="h4" size="md" letterSpacing={"tighter"}>
              Tuấn Anh
            </Heading>
          </NavLink>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavLink to="/works">
            <Text
              as="h4"
              size="md"
              marginRight="10px"
              _hover={{
                borderBottom: "1px",
                borderBottomColor: useColorModeValue("black", "white"),
              }}
            >
              Works
            </Text>
          </NavLink>
          <Link
            href="https://drive.google.com/file/d/1WmLJLmi47KTFC-Im7ZyUxn5HGCM7eC4q/view?usp=sharing"
            _hover={{
              borderBottom: "1px",
              borderBottomColor: useColorModeValue("black", "white"),
            }}
            isExternal
          >
            <FaGoogleDrive
              style={{
                display: "inline",
                marginBottom: "-3px",
                paddingRight: "2px",
              }}
            />
            My CV
          </Link>
        </Stack>
        <Box flex={1} align="right">
          <IconButton
            size="md"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            ml={2}
            isRound="true"
            onClick={toggleColorMode}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default NavBar;
