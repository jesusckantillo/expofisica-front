import React from "react";
import { Container, Heading, Divider } from "@chakra-ui/react";
import ButtonGroup from "./ButtonGroup";

const Header = ({ title }) => {
  return (
    <Container maxW="x1" display="flex" justifyContent="space-between" alignItems="center" py={4}>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
     <ButtonGroup />
    </Container>
  );
};

export default Header;