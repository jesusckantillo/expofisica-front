import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";

const ControlsSection = () => {
  return (
    <Box p={4}>
      <Button colorScheme="teal">Botón 1</Button>
      <Button colorScheme="blue">Botón 2</Button>
      <Input placeholder="Ingrese un valor" />
    </Box>
  );
};

export default ControlsSection;