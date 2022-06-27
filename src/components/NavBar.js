import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/work">
            <Text as="h4" size="md">
              Works
            </Text>
          </NavLink>
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
