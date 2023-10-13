
import { Box, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import TotalSpent from "../default/components/TotalSpent";
import Information from "../profile/components/Information";
import { experience1 } from "variables/information";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="10px" mb="20px">
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        {experience1.map((item, index) => (
          <Information key={index} title={item.title} value={item.text} />
        ))}
        <Information />
      </SimpleGrid>
    </Box>
  );
}
