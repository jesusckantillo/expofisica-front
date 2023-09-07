import React from "react";
import { Box, Text, Center, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Box bg="blue.300" p={10} position="relative">
      <Center>
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          SIRIUS
        </Text>
      </Center>
      <ChakraLink
        as={Link}
        to="/"
        display="flex"
        alignItems="center"
        color="white"
        fontSize="lg"
        textDecoration="none"
        mb={6}
      >
        <BiHomeAlt2 style={{ marginRight: "8px" }} /> Inicio
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/mecanica1"
        display="flex"
        alignItems="center"
        color="white"
        fontSize="lg"
        textDecoration="none"
        mb={6}
      >
        <BiHomeAlt2 style={{ marginRight: "8px" }} /> Fisica Mecanica
      </ChakraLink>
    </Box>
  );
};

export default Sidebar;
