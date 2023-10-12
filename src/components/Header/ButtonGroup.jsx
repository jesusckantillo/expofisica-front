import React, { useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";
import socket from "../../socket.js";

const ButtonGroup = () => {
  const handleFindArduinoClick = () => {
    // Emit the 'findArduino' event to the server
    socket.emit("checkConn", 'MRUA');

    // Listen for the 'arduinoFound' event from the server
    socket.once("checkConn", (data) => {
      alert(data.message);
    });
  };

  const dataListener = data => {
      console.log(data);
  }
  const startData = () => {
      socket.emit("startExperiment", true, 'expData');

      socket.on('expData', dataListener);
  }

  const pauseData = () => {
        socket.emit("startExperiment", false, 'expData');
        socket.off('expData', dataListener);
  }

  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal" onClick={handleFindArduinoClick}>
        Verificar conexión
      </Button>
      <Button colorScheme="teal" onClick={startData}>Iniciar gráfica</Button>
      <Button colorScheme="teal" onClick={pauseData}>Descargar Datos</Button>
    </Stack>
  );
};

export default ButtonGroup;
