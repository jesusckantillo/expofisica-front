import React, { useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";
import io from "socket.io-client";

const ButtonGroup = () => {
  const socket = io('http://localhost:3000', { transports: ['websocket'] });

  const handleFindArduinoClick = () => {
    console.log("me cago en tus muertos")
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
    



    socket.emit('findArduino');
  };

  useEffect(() => {
    // Listen for the 'findArduino' event response from the server
    socket.on('findArduino', (res) => {
      // Log the server response to the browser console
      console.log(res.message); // Assuming the response contains a 'message' property
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('findArduino');
    };
  }, []);

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
