import React from "react";
import { Container, Heading, Divider } from "@chakra-ui/react";
import ButtonGroup from "./ButtonGroup";
import ConecctionStepper from "./Stepper";

const Header = ({ title }) => {
  return (
    <Container maxW="x1" display="flex" justifyContent="space-between" alignItems="center" py={4}>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
    </Container>
  );
};

export default Header;