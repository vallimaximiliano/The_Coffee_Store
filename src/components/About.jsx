import React from "react";
import { Flex, Box, Divider, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Flex bg="#2E2422" color="#FF5C3B">
        <Heading size="xl">Sobre Nosotros</Heading>
      </Flex>
      <Flex bg="#2E2422" color="#FFD8B4">
        <Box p="4" bg="#2E2422" color="#FFD8B4">
          The Coffee Store
          <Divider />
          Aquí tendremos una descripción de nuestra tienda, fotos de los
          productos, algun slide de fotos tal vez!
        </Box>
      </Flex>
    </>
  );
};

export default About;
