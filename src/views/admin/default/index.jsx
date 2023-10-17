// Chakra imports
import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import React from "react";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Box textAlign="center" mb="20px">
        <Heading as="h1" size="2xl" mb="10px">
          Bienvenido a la aplicación
        </Heading>
        <Text fontSize="xl" mb="20px">
          Bienvenido a la aplicación de monitoreo de tus experimentos favoritos
        </Text>
        <Button colorScheme="blue" size="lg">
          Comenzar
        </Button>
      </Box>
    </Box>
  );
}
