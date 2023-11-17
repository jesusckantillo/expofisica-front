
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
import BarPlot from "plots/freefall/barplot";
import SimulationFreeFall from "animations/mechanics/SimulationFreeFall";



export default function Mechanics({loading, setLoading}) {

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

  

  //States for data
  const [data, setData] = useState([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  //Handle functions
  const HandleVerify = async () => {
    const isConnected =  await portControl.CheckConn('FF');
    setIsVerified(isConnected);
  };

  const HandleExpData = () => {
    if(experimentRunning) {
      portControl.manageData('FF', true);
      setExperimentFinished(true);
      setExperimentRunning(false);
    } else {
      setExperimentRunning(true);
      portControl.manageData('FF', false);
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
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="10px" mb="20px">
        <BarPlot />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Information title = 'Caída Libre' value = "La caída libre es un caso ideal de movimiento en el que el aire no ofrece, porque la aceleración debida a la gravedad es siempre constante y hacia abajo. Esto es cierto incluso cuando un objeto es lanzado hacia arriba o tiene velocidad cero. Por ejemplo, cuando una pelota se lanza hacia arriba en el aire, la velocidad de la bola inicialmente es hacia arriba. Como la gravedad la jala hacia la Tierra con una aceleración constante ‍, la magnitud de la velocidad disminuye a medida que la pelota se aproxima a la altura máxima."/>
      </SimpleGrid>
    </Box>
    <Box margin="5%">
    <Center>
    <SimulationFreeFall /> 
    </Center>
    </Box>
    </ConfigProvider>
  );
}