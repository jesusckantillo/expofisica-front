
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Information from "../electricity/components/Information";
import { experience1 } from "variables/information";
import { ArrowForwardIcon } from "@chakra-ui/icons";


import TotalSpent from "../default/components/TotalSpent";

export default function Marketplace() {

  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div>
        <SimpleGrid marginBottom={4} columns={3} spacing={2}>
          <Button colorScheme="green" variant="solid" size="md">
            Verificar conexión
          </Button>
          <Button disabled={!isVerified} colorScheme="blue" variant="solid" size="md">
            Iniciar experimento
          </Button>
          <Button disabled={!experimentFinished} colorScheme="blue" variant="solid" size="md">
            Descargar datos
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="10px" mb="20px">
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Information title = 'Una zona para mostrar valores relevantes del experimento' value = "I can see the future, it's lookin like we level through the sky"/>
        <Information  title = 'Experimento' value = 'I can see the future, I can see the future' />
      </SimpleGrid>
    </Box>
  );
}
