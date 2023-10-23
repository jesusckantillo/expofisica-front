
import { useState, useEffect } from "react";

import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import TotalSpent from "views/admin/default/components/TotalSpent";
import Information from "../electricity/components/Information";
import { Button, Icon } from '@chakra-ui/react'
import kundtGIF from 'components/icons/kundtGif.jpg'

// Assets
import React from "react";

export default function HeatAndWaves1() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [experimentFinished, setExperimentFinished] = useState(false);


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
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
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid display={'flex'} columns={{ base: 1, md: 2, xl: 3 }} gap='20px' mb='20px'>
        <Information title = '¿Qué es el Tubo de Kundt?' value = 'El tubo de Kundt es un dispositivo que permite reconocer la posición de nodos y vientres de ondas estacionarias, gracias a los diferentes patrones que forman en polvo de corcho presente en el interior de un tubo. El sonido se produce con un altavoz conectado a un generador de señales.'/>
        <img style={{height: '300px', borderRadius: '20px'}} src={kundtGIF}/>
        <Information w='800px' title = '¿Qué es una onda estacionaria?' value = 'Una onda estacionaria es el patrón de vibración que se produce cuando dos ondas de la misma frecuencia y amplitud, viajan en direcciones opuestas, interfieren entre sí y se superponen. Las ondas estacionarias se producen en medios elásticos, como cuerdas, membranas y columnas de aire.'/>
      </SimpleGrid>
    </Box>
  );
}
