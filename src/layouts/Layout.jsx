import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar/SideBar";
import { Grid, Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Grid minH="100vh" templateColumns="250px 1fr" gap={4} bg="white">
        <Sidebar />
      <Grid gridColumn="2 / 4" p={4}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
