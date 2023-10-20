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

import { FaWeightHanging } from "react-icons/fa";

import { BsFire } from "react-icons/bs";


import { MdElectricBolt } from "react-icons/md";


// Admin Imports
import MainDashboard from "views/admin/default";
import Mechanics from "views/admin/mechanics/index";
import Electricity from "views/admin/electricity/index";
import HeatAndWaves from "views/admin/heat-waves/index";
import ChartTests from "views/admin/chartsTest/index";


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
        as={FaWeightHanging}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Mechanics,
    items: [
      {
        name: "Mecanica Cinematica",
        path: "/mechanics-1",
        component: Electricity,
      },
      {
        name: "Mecanica Dinamica",
        path: "/mechanics-2",
        component: Electricity,
      },
    ],
  },
  {
    name: "Mecanica 2",
    path: "/admin/mechanics/mechanics-2",
    component: Electricity,
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
  },
  {
    name: "Agregar Gráficas aquí",
    layout: "/admin",
    path: "/charts",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: ChartTests,
  }
];

export default routes;
