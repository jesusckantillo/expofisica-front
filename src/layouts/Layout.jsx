import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar/SideBar";
import { Grid, Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Grid minH="100vh" templateColumns="250px 1fr" gap={4} bg="white">
      <Box
        position="fixed"
        left={0}
        top={0}
        h="100vh"
        w="250px"
        zIndex={1}
        bg="blue.300"
      >
        <Sidebar />
      </Box>
      <Grid gridColumn="2 / 3" p={4}>
          <Outlet />
        </Grid>
    </Grid>
  );
};

export default Layout;
