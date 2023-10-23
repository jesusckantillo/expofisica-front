import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import SIRIUS from "components/icons/logoennegro.png"
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <div style={{borderRadius: '20px', width: '100px', marginBottom: '10px'}}>
        <img style={{borderRadius: '20px', boxShadow: '0px 0px 10px #ccc'}} src={SIRIUS}></img>
      </div>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
