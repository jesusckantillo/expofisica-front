// Chakra imports
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "./Card";
import React from "react";

export default function Information(props) {
  const { title, value, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest}>
      <Box>
        <Text color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
          {title}
        </Text>
        <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
          {value}
        </Text>
      </Box>
    </Card>
  );
}