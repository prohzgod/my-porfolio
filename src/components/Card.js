import { Box, Image, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link href={`https://github.com/prohzgod/${id}`} isExternal>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          borderRadius="12px"
          h="100%"
          objectFit="cover"
          maxHeight="100%"
        />
        <LinkOverlay>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text mt={2} fontSize={14}>
          {children}
        </Text>
      </LinkBox>
    </Link>
  </Box>
);
