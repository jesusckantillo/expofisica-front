import React, { useState } from "react";
import {
  Box,
  Text,
  Center,
  Link as ChakraLink,
  List,
  ListItem,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";


const Sidebar = () => {
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [showSubmenu3, setShowSubmenu3] = useState(false);
  return (
    <Box bg="blue.300" p={10} position="relative">
      <Center>
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          SIRIUS
        </Text>
      </Center>

      <ChakraLink
        as={Link}
        to="/"
        display="flex"
        alignItems="center"
        color="white"
        fontSize="lg"
        textDecoration="none"
        marginLeft="0px"
        mb={6}
        pl={4}
      >
        <BiHomeAlt2 style={{ marginRight: "8px" }} /> Inicio
      </ChakraLink>

      <Button
        onClick={() => setShowSubmenu1(!showSubmenu1)}
        backgroundColor="blue.300"
        color="white"
        fontSize="lg"
        marginRight="8px"
        leftIcon={<BiHomeAlt2 />}
      >
        Fisica Mecanica
      </Button>
      <Box marginLeft="40px">
        <Collapse in={showSubmenu1}>
          <List>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/mecanica1"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 1
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/mecanica2"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 2
              </ChakraLink>
            </ListItem>
          </List>
        </Collapse>
      </Box>
      <Button
        onClick={() => setShowSubmenu2(!showSubmenu2)}
        backgroundColor="blue.300"
        color="white"
        fontSize="lg"
        marginRight="8px"
        leftIcon={<AiFillFire />}
      >
        Fisica Calor y Onda
      </Button>
      <Box marginLeft="40px">
        <Collapse in={showSubmenu2}>
          <List>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/calorOnda1"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 1
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/calorOnda2"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 2
              </ChakraLink>
            </ListItem>
          </List>
        </Collapse>
      </Box>
      <Button
        onClick={() => setShowSubmenu3(!showSubmenu3)}
        backgroundColor="blue.300"
        color="white"
        fontSize="lg"
        marginRight="8px"
        leftIcon={<MdOutlineElectricBolt />}
      >
        Fisica Electricidad
      </Button>
      <Box marginLeft="40px">
        <Collapse in={showSubmenu3}>
          <List>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/electricidad1"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 1
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                as={Link}
                to="/electricidad2"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                textDecoration="none"
                mb={6}
              >
                Experimento 2
              </ChakraLink>
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Sidebar;
