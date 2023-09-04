import react from 'react'
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { MdElectricBolt } from "react-icons/md";
import Information from '../components/InformationCard';
import { experience1 } from '../assets/Information';

function App() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        {experience1.map((item, index) => (
          <Information key={index} title={item.title} value={item.text} />
        ))}
        <Information />
      </SimpleGrid>
    </Box>
  );
}

export default App