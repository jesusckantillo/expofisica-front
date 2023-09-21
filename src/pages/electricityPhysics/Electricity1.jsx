import React, { useEffect } from "react";
import { Box, SimpleGrid, Container,Divider } from "@chakra-ui/react";
import PlotsContainer from "../../components/ExpTemplate/PlotsContainer";
import ControlsSection from "../../components/ExpTemplate/ControlSection";
import Header from "../../components/Header/Header";

 const Electricity1 = () => {
    const props = {
        name : "Radio electromagnetica",   
    }
    return (
        <Container maxW="100%" centerContent={false}>
            <Header title={props.name} />
            <Divider orientation='horizontal' />
            <PlotsContainer />
            <ControlsSection />
        </Container>
    );
}

export default Electricity1;
