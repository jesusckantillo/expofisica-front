import React, { useEffect } from "react";
import { Box, SimpleGrid, Container,Divider } from "@chakra-ui/react";
import PlotsContainer from "../../components/ExpTemplate/PlotsContainer";
import ControlsSection from "../../components/ExpTemplate/ControlSection";
import Header from "../../components/Header/Header";
import MetalDetector from "./Animation/MetalDetector";

 const Electricity1 = () => {
    const props = {
        name : "Movimiento rectilineo",   
    }
    
    return (
        <Box>
            <MetalDetector/>
        </Box>
    );
}

export default Electricity1;
