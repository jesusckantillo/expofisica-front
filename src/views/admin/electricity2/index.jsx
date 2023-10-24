
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
import LinePlot from "../../../plots/lineplot";



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

  const tableData = [
    {
      key: '1',
      name: 'Experimento 1',
      description: 'Experimento de física 1',
    },
    {
      key: '2',
      name: 'Experimento 2',
      description: 'Experimento de física 2',
    },
    {
      key: '3',
      name: 'Experimento 3',
      description: 'Experimento de física 3',
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
    setLoading(true)
    const isConnected =  await portControl.CheckConn('EF');
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
        <LinePlot />
      </SimpleGrid>
    </Box>
    </ConfigProvider>
  );
}