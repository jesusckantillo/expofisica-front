import React, { useEffect } from "react";
import { Box, SimpleGrid, Container,Divider } from "@chakra-ui/react";
import Template from "../../components/ExpTemplate/PlotsContainer";
import Header from "../../components/Header/Header";

 const Electricity1 = () => {
    const props = {
        name : "Radio de Elkin",   
    }
    return (
        <Container maxW="100%" centerContent={false}>
            <Header title={props.name} />
            <Divider orientation='horizontal' />
            <Template />
        </Container>
    );
}

export default Electricity1;
