import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Image,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { ConfigProvider, Table } from "antd";
import Information from "../electricity/components/Information";
import { experience1 } from "variables/information";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import mockup from "components/icons/sirius_mockup2.png";
import caidLibre from "components/icons/caidalibre.jpg";
import movimientoParticula from "components/icons/desplazamiento.jpg";
import TotalSpent from "../default/components/TotalSpent";
import { Components } from "antd/es/date-picker/generatePicker";

export default function Marketplace() {
  const tableStyles = {
    border: "1px solid #e8e8e8",
    borderRadius: "20px",
    FontFamily: "Plus Jakarta Sans",
  };

  const [isVerified, setIsVerified] = React.useState(false);
  const [experimentFinished, setExperimentFinished] = React.useState(false);
  const [data, setData] = useState([]);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#195aec",
            borderRadius: "20px",
            algorithm: true,
          },
          Input: {
            colorPrimary: "#195aec",
            borderRadius: "20px",
            algorithm: true,
          },
          Table: {
            fontFamily: "DM Sans",
          },
          Select: {
            borderRadius: "20px",
          },
        },
      }}
    >
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Box textAlign="center" mb="20px">
          <Heading as="h1" size="2xl" mb="10px">
            Selecciona la experiencia
          </Heading>
          <Text fontSize="xl" mb="20px">
            Selecciona el experimento que deseas realizar
          </Text>
          <Grid templateColumns="1fr 1fr" gap={4}>
            {/* Cuadrícula con dos columnas */}
            <Box display="inline-block" textAlign="center">
              <Text fontSize="xl" mb="20px" color={brandColor}>
                Caída libre
              </Text>
              <Link to="/admin/mechanics/mechanics-1">
                <Image
                  src={caidLibre}
                  alt="SIRIUS"
                  maxWidth="45%"
                  ml="190px"
                  mb="20px"
                  borderRadius="20px"
                  boxShadow="0px 0px 50px #ccc"
                />
              </Link>
            </Box>
            <Box display="inline-block" textAlign="center">
              <Text fontSize="xl" mb="20px" color={brandColor}>
                Movimiento de partícula
              </Text>
              <Link to="/admin/mechanics/mechanics-2">
                <Image
                  src={movimientoParticula}
                  alt="SIRIUS"
                  maxWidth="45%"
                  ml="190px"
                  mb="20px"
                  borderRadius="20px"
                  boxShadow="0px 0px 50px #ccc"
                />
              </Link>
            </Box>
          </Grid>
        </Box>
      </Box>
    </ConfigProvider>
  );
}
