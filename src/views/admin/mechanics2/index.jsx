
import React from "react";
import { useState, useEffect } from "react";

// Chakra imports
import {
  Box,
  Button,
  Stack,
  Link,
  Center,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { ConfigProvider, Table } from "antd";
import Information from "../electricity/components/Information";
import { experience1 } from "variables/information";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { portControl } from "../../../utils/arduinocontroller";
import LinePlot from "../../../plots/MRUA/lineplot";
import LinePlot2 from "../../../plots/MRUA/lineplot2";
import SimulationMRUA from "animations/mechanics/SimulationMRUA";
import kundtGIF from 'components/icons/mruaSiriusImg.png'
export default function Mechanics() {

  const tableStyles = {
    border: '1px solid #e8e8e8',
    borderRadius: '20px',
    FontFamily: 'Plus Jakarta Sans'
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link>{text}</Link>,
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Acción',
      dataIndex: 'action',
      key: 'action',
      render: () => <Button colorScheme="blue" variant="solid" size="sm"><ArrowForwardIcon /></Button>,
    },
  ];


  //States for visual stuff
  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  const [experimentRunning, setExperimentRunning] = useState(false);

  


  //Handle functions
  const HandleVerify = async () => {
    const isConnected =  await portControl.CheckConn('MRUA');
    setIsVerified(isConnected);
  };

  const HandleExpData = () => {
    if(experimentRunning) {
      setExperimentFinished(true);
      setExperimentRunning(false);
      portControl.manageData('MRUA', true);
    } else {
      setExperimentRunning(true);
      portControl.manageData('MRUA', false);
    }
  };
  
  return (
    <ConfigProvider
    theme={{
      components: {
        Button: {
          colorPrimary: '#195aec',
          borderRadius: '20px',
          algorithm: true,
        },
        Input: {
          colorPrimary: '#195aec',
          borderRadius: '20px',
          algorithm: true,
        },
        Table: {
          fontFamily: 'DM Sans',
        },
        Select: {
          borderRadius: '20px',
        },
      },
    }}
    >
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
<<<<<<< Updated upstream
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="10px" mb="20px">
        <LinePlot2 xaxis="time" xname="Tiempo(s)" yname="Distancia(cm)" yaxis="distance" />
        <LinePlot2 xaxis="time" xname="Tiempo(s)" yname="Velocidad(cm/s)" yaxis="" />
=======
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2}} gap="10px" mb="20px">
        <LinePlot2 xaxis="time" xname="Tiempo(s)" yname="Distancia(cm)" yaxis="distance" />
        <LinePlot2 xaxis="time" xname="Tiempo(s)" yname="Velocidad(cm/s)" yaxis="speed" />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1}} gap="10px" mb="20px">
        <LinePlot2 xaxis="time" xname="Tiempo(s)" yname="Aceleración(cm/s2)" yaxis="aceleration" />
>>>>>>> Stashed changes
      </SimpleGrid>
      <SimpleGrid margin="3%" columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Information title = 'Movimiento de una particula' value = "El movimiento de una partícula es un caso especial de movimiento con aceleración constante, porque la aceleración debida a la gravedad es siempre constante y hacia abajo. Esto es cierto incluso cuando un objeto es lanzado hacia arriba o tiene velocidad cero. Por ejemplo, cuando una pelota se lanza hacia arriba en el aire, la velocidad de la bola inicialmente es hacia arriba. Como la gravedad la jala hacia la Tierra con una aceleración constante ‍, la magnitud de la velocidad disminuye a medida que la pelota se aproxima a la altura máxima."/>
        <img style={{height: '300px', borderRadius: '20px'}} src={kundtGIF}/>
      </SimpleGrid>
    </Box>
    <Box margin="5%">
    <Center>
    <SimulationMRUA/>
    </Center>
    </Box>
    </ConfigProvider>
  );
}