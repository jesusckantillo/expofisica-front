import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

function ExampleTable({ data }) {
  return (
    <Box>
      <Table variant="simple">
        <TableCaption>Tabla de Velocidad vs. Tiempo</TableCaption>
        <Thead>
          <Tr>
            <Th>Time (s)</Th>
            <Th>Velocity (m/s)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.time}</Td>
              <Td>{item.velocity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default ExampleTable;
