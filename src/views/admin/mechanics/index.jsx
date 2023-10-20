
import React from "react";
import { useState } from "react";

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
import { ConfigProvider, Table } from "antd";
import Information from "../electricity/components/Information";
import { experience1 } from "variables/information";
import { ArrowForwardIcon } from "@chakra-ui/icons";


import TotalSpent from "../default/components/TotalSpent";
import { Components } from "antd/es/date-picker/generatePicker";

export default function Marketplace() {

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

  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  const [data, setData] = useState([]);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
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
        <Table
          style={tableStyles}
          columns={columns}
          dataSource={tableData}        
        />
        <Information title = 'Una zona para mostrar valores relevantes del experimento' value = "I can see the future, it's lookin like we level through the sky"/>
        <Information  title = 'Experimento' value = 'I can see the future, I can see the future' />
      </SimpleGrid>
    </Box>
    </ConfigProvider>
  );
}
