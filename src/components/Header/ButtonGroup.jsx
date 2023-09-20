import React from "react";
import { Button, Stack } from "@chakra-ui/react";

const ButtonGroup = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal">Check</Button>
      <Button colorScheme="teal">Check</Button>
      <Button colorScheme="teal">Check</Button>
    </Stack>
  );
};

export default ButtonGroup;