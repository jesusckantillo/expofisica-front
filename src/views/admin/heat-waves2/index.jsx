
import { useState, useEffect } from "react";

import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import TotalSpent from "views/admin/default/components/TotalSpent";
import Information from "../electricity/components/Information";
import TMTPlot from "plots/termometer/lineplot";
import { portControl } from "../../../utils/arduinocontroller";
import { Button, Icon } from '@chakra-ui/react'

// Assets
import React from "react";

export default function HeatAndWaves2() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  const [experimentRunning, setExperimentRunning] = useState(false);




  const HandleVerify = async () => {
    const isConnected =  await portControl.CheckConn('TMT');
    setIsVerified(isConnected);
  };

  const HandleExpData = () => {
    if(experimentRunning) {
      portControl.manageData('TMT', true);
      setExperimentFinished(true);
      setExperimentRunning(false);
    } else {
      setExperimentRunning(true);
      portControl.manageData('TMT', false)
    }
  };




  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <div>
        <SimpleGrid marginBottom={4} columns={3} spacing={2}>
          <Button colorScheme="green" variant="solid" size="md" onClick={HandleVerify}>
            Verificar conexión
          </Button>
          <Button disabled={!isVerified} onClick={HandleExpData} colorScheme="blue" variant="solid" size="md">
          {experimentRunning ? "Detener experimento" : "Iniciar experimento"}
          </Button>
          <Button disabled={!experimentFinished} colorScheme="blue" variant="solid" size="md">
            Descargar datos
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TMTPlot />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <Information title = 'Termómetro' value = 'Un termómetro es un dispositivo que se utiliza para medir la temperatura. El principio de funcionamiento de un termómetro se basa en el equilibrio térmico. El equilibrio térmico se refiere al estado en el que dos objetos a diferentes temperaturas alcanzan una temperatura común cuando se ponen en contacto directo. Un termómetro mide su propia temperatura y, a través del equilibrio térmico, puede medir la temperatura de otros objetos.'/>
      </SimpleGrid>
    </Box>
  );
}
