import React from "react";

import {
	Avatar,
	Button,
	Flex,
	Icon,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue
} from '@chakra-ui/react';

import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { BsFire } from "react-icons/bs";


import { MdElectricBolt } from "react-icons/md";


// Admin Imports
import MainDashboard from "views/admin/default";
import Mechanics from "views/admin/mechanics/index";
import Electricity from "views/admin/electricity/index";
import HeatAndWaves from "views/admin/heat-waves/index";


const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/main-dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Fisica Mecanica",
    layout: "/admin",
    path: "/mechanics",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Mechanics,
    secondary: true,
  },
  {
    name: "Fisica Calor Ondas",
    layout: "/admin",
    icon: <Icon as={BsFire} width='20px' height='20px' color='inherit' />,
    path: "/heat-waves",
    component: HeatAndWaves,
  },
  {
    name: "Fisica electricidad",
    layout: "/admin",
    path: "/electricity",
    icon: <Icon as={MdElectricBolt} width='20px' height='20px' color='inherit' />,
    component: Electricity,
  }
];

export default routes;
