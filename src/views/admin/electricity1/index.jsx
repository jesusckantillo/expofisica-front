
import { useState, useEffect } from "react";
import socket from "socket";
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import TotalSpent from "views/admin/default/components/TotalSpent";
import Information from "../electricity/components/Information";
import { Button, Icon } from '@chakra-ui/react'
import MetalDetector from "animations/electricity/MetalDetector"

// Assets
import React from "react";
import { portControl } from "utils/arduinocontroller";

export default function Electricity1() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [experimentFinished, setExperimentFinished] = useState(false);
  const [experimentRunning, setExperimentRunning] = useState(false);

  const HandleVerify = async () => {
    setLoading(true)
    const isConnected =  await portControl.CheckConn('MD');
    setIsVerified(isConnected);
  };

  const HandleExpData = () => {
    if(experimentRunning) {
      portControl.manageData('MD', true);
      setExperimentFinished(true);
      setExperimentRunning(false);
    } else {
      portControl.manageData('MD', false);
      setExperimentRunning(true);
    }
  };



  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <div>
        <SimpleGrid marginBottom={4} columns={3} spacing={2}>
          <Button colorScheme="green" onClick={HandleVerify} variant="solid" size="md">
            Verificar conexión
          </Button>
          <Button disabled={!isVerified} colorScheme="blue" onClick={HandleExpData} variant="solid" size="md">
          {experimentRunning ? "Detener experimento" : "Iniciar experimento"}
          </Button>
          <Button disabled={!experimentFinished} colorScheme="blue" variant="solid" size="md">
            Descargar datos
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <MetalDetector/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
      <Information title = 'Detector de metales' value = "Un detector de metales es un dispositivo que utiliza un campo electromagnético para detectar la presencia de objetos metálicos. El detector tiene una bobina que genera un campo electromagnético al ser recorrida por una corriente eléctrica. Cuando el detector se acerca a un objeto metálico, el campo electromagnético interactúa con el metal y produce una corriente inducida en el objeto. En este caso, el detector detecta metales ferrosos o no ferrosos"/>
      </SimpleGrid>
    </Box>
  );
}
