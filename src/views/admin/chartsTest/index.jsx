
import { Box, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import TotalSpent from "../default/components/TotalSpent";
import Information from "../electricity/components/Information";
import { experience1 } from "variables/information";
import { Button } from "@chakra-ui/react";


export default function Settings() {
  
  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);


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
        
        <Information title="Agregar mutliples graficos o cuantos sea necesario para estas pruebas... eliminar componente si es necesario" />
      </SimpleGrid>
    </Box>
  );
}
