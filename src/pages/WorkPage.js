import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Section from "../components/Section";
import { WorkGridItem } from "../components/Card";
import shopmanager from "../public/image/shopmanager.jpg";
import findinggame from "../public/image/Findinggame.jpg";
import rfid from "../public/image/rfid.jpg";

function WorkPage() {
  return (
    <Container maxW="container.sm" pt={14} px={{ base: 5, md: 16 }}>
      <Section delay={0.1}>
        <Box width="100%" bg="blue.200" height="200px" mt="10px">
          {" "}
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" fontSize="lg" pt="10px" pb="10px">
          Works
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap="6px">
        <Section delay={0.3}>
          <WorkGridItem id="Seminar_RFID" title="RFID APP" thumbnail={rfid}>
            A desktop app to regconize RFID card and store them for manage book
            in library.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="NUMBER_FINDING_GAME"
            title="Number finding game"
            thumbnail={findinggame}
          >
            A Java game made by JavaFX. Multiplayer supported.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="Shop_Manager_System"
            title="Shop Manager System"
            thumbnail={shopmanager}
          >
            A desktop app to manage shoe store.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default WorkPage;
