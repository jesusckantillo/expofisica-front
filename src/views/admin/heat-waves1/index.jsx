
import { useState, useEffect } from "react";

import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import TotalSpent from "views/admin/default/components/TotalSpent";
import Information from "../electricity/components/Information";
import { Button, Icon } from '@chakra-ui/react'
import kundtGIF from 'components/icons/kundtGif.jpg'
import { portControl } from "../../../utils/arduinocontroller";
import SinWave from "animations/heatwaves/SinWave";

// Assets
import React from "react";

export default function HeatAndWaves1() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  const [experimentRunning, setExperimentRunning] = useState(false);
  const [frequency, setFrequency] = useState();



  const HandleVerify = async () => {
    setLoading(true)
    const isConnected =  await portControl.CheckConn('MRUA');
    setIsVerified(isConnected);
  };

  const HandleExpData = () => {
    if(experimentRunning) {
      portControl.manageData('MRUA', false);
      setExperimentFinished(true);
      setExperimentRunning(false);
    } else {
      setExperimentRunning(true);
    }
  };
  


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <div>
        <SimpleGrid margin={4} columns={3} spacing={8}>
          <Button colorScheme="green" onClick={HandleVerify}  variant="solid" size="md">
            Verificar conexión
          </Button>
          <Button disabled={!isVerified} onClick={HandleExpData}colorScheme="blue" variant="solid" size="md">
          {experimentRunning ? "Detener experimento" : "Iniciar experimento"}
          </Button>
          <Button disabled={!experimentFinished} colorScheme="blue" variant="solid" size="md">
            Descargar datos
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="10px" mb="20px">
        <SinWave frequency={frequency} />
      </SimpleGrid>
      <input
        type="number"
        value={frequency}
        onChange={(e) => setFrequency(parseFloat(e.target.value))}
      />
      <SimpleGrid display={'flex'} columns={{ base: 1, md: 2, xl: 3 }} gap='20px' mb='20px'>
        <Information title = '¿Qué es el Tubo de Kundt?' value = 'El tubo de Kundt es un dispositivo que permite reconocer la posición de nodos y vientres de ondas estacionarias, gracias a los diferentes patrones que forman en polvo de corcho presente en el interior de un tubo. El sonido se produce con un altavoz conectado a un generador de señales.'/>
        <img style={{height: '300px', borderRadius: '20px'}} src={kundtGIF}/>
        <Information w='800px' title = '¿Qué es una onda estacionaria?' value = 'Una onda estacionaria es el patrón de vibración que se produce cuando dos ondas de la misma frecuencia y amplitud, viajan en direcciones opuestas, interfieren entre sí y se superponen. Las ondas estacionarias se producen en medios elásticos, como cuerdas, membranas y columnas de aire.'/>
      </SimpleGrid>
    </Box>
  );
}
