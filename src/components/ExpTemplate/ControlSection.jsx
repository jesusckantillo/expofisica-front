import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";

const ControlsSection = () => {
  return (
    <Box p={4}>
      {/* Agrega aquí tus controladores, por ejemplo, botones e inputs */}
      <Button colorScheme="teal">Botón 1</Button>
      <Button colorScheme="blue">Botón 2</Button>
      <Input placeholder="Ingrese un valor" />
      {/* Agrega otros elementos de control según tus necesidades */}
    </Box>
  );
};

export default ControlsSection;