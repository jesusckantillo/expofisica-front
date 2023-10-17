// Chakra imports
import { Box, Button, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Custom components
import React from "react";
import mockup from "components/icons/sirius_mockup2.png"

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Box textAlign="center" mb="20px">
        <Heading as="h1" size="2xl" mb="10px">
          Bienvenido a {<Text as="span" color={brandColor}>SIRIUS</Text>}
        </Heading>
        <Text fontSize="xl" mb="20px">
          Una plataforma para el análisis de datos de experimentos de física universitaria
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src={mockup} alt="SIRIUS" maxWidth="45%" mb="10px" borderRadius="20px" />
        </Box>
        <Link to="/admin/mechanics">
          <Button colorScheme="blue" size="lg"  boxShadow="0px 0px 10px #422afb" borderRadius="20px">
            Comenzar
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
