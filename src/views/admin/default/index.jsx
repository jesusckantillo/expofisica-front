// Chakra imports
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

// Custom components
import React from "react";
import TotalSpent from "views/admin/default/components/TotalSpent";

import Information from "../profile/components/Information";

import { experience1 } from "variables/information";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap="10px" mb="20px">
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
