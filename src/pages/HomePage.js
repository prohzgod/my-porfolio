import {
  Box,
  Container,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import avatar from "../public/image/avatar.jpg";

function HomePage() {
  return (
    <Container maxW="container.sm" pt={14} px={{ base: 5, md: 16 }}>
      <Section delay={0.1}>
        <Text
          fontSize="lg"
          borderRadius="lg"
          backgroundColor={useColorModeValue("gray.300", "whiteAlpha.200")}
          padding="10px"
          textAlign="center"
          marginY="10px"
        >
          Hello, I'm a web developer based in Vietnam!
        </Text>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Text fontSize="4xl">Nguyễn Tuấn Anh</Text>
            <Text fontSize="lg">Front-end developer (Intern) </Text>
          </Box>
          <Box
            flexShrink={0}
            align="center"
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
          >
            <Image
              borderColor={useColorModeValue(
                "blackAlpha.800",
                "whiteAlpha.800"
              )}
              display="inline-block"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              boxSize="100px"
              objectFit="cover"
              src={avatar}
              alt="Avatar"
            />
          </Box>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading
          as="h3"
          size="md"
          variant="section-title"
          display="inline"
          borderBottom="2px"
          borderBottomWidth="medium"
          borderBottomColor="grey"
        >
          Work
        </Heading>
        <Paragraph>
          Tuấn Anh is a frontend developer (Intern) based in HoChiMinh city with
          a passion for building digital stuff he wants. He has knowledge in web
          frontend technology like languages (HTML, CSS, Javascript) and
          framework (React). He also like to learn new technology in other
          fields such as mobile / game / 3d modelling (Blender). Currently he is
          working as an intern in ... . When not online, he loves hanging out
          with his friend or going to coffee with himself.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          size="md"
          variant="section-title"
          display="inline"
          borderBottom="2px"
          borderBottomWidth="medium"
          borderBottomColor="grey"
        >
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in CaMau city, Vietnam
        </BioSection>
        <BioSection>
          <BioYear>2015 - 2018</BioYear>
          Graduated from CaMau highschool
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Studying Information Technology at SaiGon University
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          size="md"
          variant="section-title"
          display="inline"
          borderBottom="2px"
          borderBottomWidth="medium"
          borderBottomColor="grey"
        >
          I ♥
        </Heading>
        <Paragraph>
          Video Games, Music, Art, Poem, Photography, History...
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          size="md"
          variant="section-title"
          display="inline"
          borderBottom="2px"
          borderBottomWidth="medium"
          borderBottomColor="grey"
        >
          On The Web
        </Heading>
        <List spacing={3} mt="10px">
          <ListItem>
            <ListIcon as={FaFacebookSquare} w="24px" h="24px" />
            <Link href="https://www.facebook.com/ProHZGOD/" isExternal>
              @Nguyễn Tuấn Anh
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={FaLinkedin} w="24px" h="24px" />
            <Link href="https://www.linkedin.com/in/0912-tuan-anh/" isExternal>
              @Nguyễn Tuấn Anh
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={FaGithub} w="24px" h="24px" />
            <Link href="https://github.com/prohzgod" isExternal>
              @Just another Dev
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default HomePage;
