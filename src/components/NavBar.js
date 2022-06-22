import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WorkPage from "../pages/WorkPage";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
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
          <NavLink to="/">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Tuấn Anh
            </Heading>
          </NavLink>
        </Flex>

        <NavLink to="/work">
          <Text size="md" ml={2}>
            Work
          </Text>
        </NavLink>
        <Spacer />
        <IconButton
          size="md"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          ml={2}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  );
}

export default NavBar;
