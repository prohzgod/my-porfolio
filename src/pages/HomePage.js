import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <Container maxW="container.sm" pt={14} px={16}>
      <Text
        fontSize="lg"
        borderRadius="lg"
        backgroundColor="whiteAlpha.200"
        padding="10px"
        textAlign="center"
        marginY="10px"
      >
        Hello, I'm a web developer based in Vietnam!
      </Text>

      <Box display="flex">
        <Box flexGrow={1}>
          <Text fontSize="4xl">Nguyễn Tuấn Anh</Text>
          <Text fontSize="lg">Front-end developer (Intern) </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize="100px"
            objectFit="cover"
            src="/avatar.jpg"
            opacity="1"
            alt="Avatar"
          />
        </Box>
      </Box>
      <Box>
        <Text>Works</Text>
      </Box>
      <Box>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </Text>
      </Box>
      <Box>
        <Text>Works</Text>
      </Box>
      <Box>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </Text>
      </Box>
    </Container>
  );
}

export default HomePage;
