import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { plotData } from "../Plots/PlotExample";
import { plotOptions } from "../Plots/PlotExample";
import { Line } from 'react-chartjs-2';
import ExampleTable from "./TableExample";

const data = [
  { "time": 0, "velocity": 0 },
  { "time": 1, "velocity": 5 },
  { "time": 2, "velocity": 10 },
  { "time": 3, "velocity": 15 },
  { "time": 4, "velocity": 20 }
];

const PlotsContainer = () => {
  return (
    <Box p={4} maxHeight="80vh" overflow="auto">
      <Grid
        templateColumns="2.5fr 2fr"
        gap={4}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <Box p={4} boxShadow="md">
          <div style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            
          </div>
        </Box>
        <Box>
          {/* Aquí pasamos los datos a ExampleTable */}
          <ExampleTable data={data} />
        </Box>
        <Box>

        </Box>
      </Grid>
    </Box>
  );
};

export default PlotsContainer;

