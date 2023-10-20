import { Box, Flex, Stack, Select } from "@chakra-ui/react";
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import React, { useState } from "react";

function SidebarContent(props) {
  const { routes } = props;
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
        <Select
          mt="16px"
          value={selectedItem}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Selecciona un elemento</option>
          {routes.map((route, index) => (
            <option key={index} value={route.path}>
              {route.name}
            </option>
          ))}
        </Select>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;

