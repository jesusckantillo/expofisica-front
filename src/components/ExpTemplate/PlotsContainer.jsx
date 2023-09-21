import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { plotData } from "../Plots/PlotExample";
import { plotOptions } from "../Plots/PlotExample";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const Plot1 = () => {
  return (
      <Line data={plotData} options={plotOptions} />
  );};

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
           <Plot1 />
          </div>
        </Box>
        <Box p={4} boxShadow="md">
          <div style={{ height: "600px" }}>
            Bla
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default PlotsContainer;
