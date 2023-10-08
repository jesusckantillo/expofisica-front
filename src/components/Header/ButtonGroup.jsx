import React, { useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";
import socket from "../../socket.js";

const ButtonGroup = () => {
  const handleFindArduinoClick = () => {
    // Emit the 'findArduino' event to the server
    socket.emit("checkConn", 'MRUA');

    // Listen for the 'arduinoFound' event from the server
    socket.on("checkConn", (data) => {
      alert(data.message);
    });
  };

  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal" onClick={handleFindArduinoClick}>
        Verificar conexión
      </Button>
      <Button colorScheme="teal">Iniciar gráfica</Button>
      <Button colorScheme="teal">Descargar Datos</Button>
    </Stack>
  );
};

export default ButtonGroup;
