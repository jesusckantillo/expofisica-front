import React from "react";
import { Grid, Box } from "@chakra-ui/react";

const Template = () => {
  return (
    <Box p={4}>
      <Grid
      templateColumns="2.5fr 2fr" 
      gap={4}
      h="100vh" 
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Box p={4} boxShadow="md">
        Gráfica 1
      </Box>
      <Box p={4} boxShadow="md">
        Gráfica 2
      </Box>
    </Grid>
      </Box>
  );
};

export default Template;
