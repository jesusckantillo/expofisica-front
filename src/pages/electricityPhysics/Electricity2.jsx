import React from "react";
import { Box, SimpleGrid, Container,Divider } from "@chakra-ui/react";
import Header  from "../../components/Header/Header";
import PlotsContainer from "../../components/ExpTemplate/PlotsContainer";
import ControlsSection from "../../components/ExpTemplate/ControlSection";

const Electricity2 = () => {
    const props = {
        name : "Detector de metales",   
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

export default Electricity2;