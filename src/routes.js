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

import { MdHome } from "react-icons/md";

import { GiFallDown } from "react-icons/gi";

import { FaWeightHanging } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";

import { BsFire, BsSoundwave, BsThermometerHalf } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { GiMagnet } from "react-icons/gi";
import { IoMagnetOutline } from "react-icons/io5";


// Admin Imports
import MainDashboard from "views/admin/default";
import Mechanics from "views/admin/mechanics/index";
import Mechanics1 from "views/admin/mechanics1/index";
import Mechanics2 from "views/admin/mechanics2/index";
import Electricity from "views/admin/electricity/index";
import Electricity1 from "views/admin/electricity1/index";
import Electricity2 from "views/admin/electricity2/index";
import HeatAndWaves from "views/admin/heat-waves/index";
import HeatAndWaves1 from "views/admin/heat-waves1/index";
import HeatAndWaves2 from "views/admin/heat-waves2/index";

import ChartTests from "views/admin/chartsTest/index";

const titleStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/main-dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Física Mecánica",
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
    collapse: true,
    items: [
      {
        layout: "/admin",
        name: "Caída libre",
        path: "/mechanics-1",
        component: Mechanics1,
        icon: <Icon as={GiFallDown} width='20px' height='20px' color='inherit' />, 
      },
      {
        layout: "/admin",
        name: "MRUA",
        path: "/mechanics-2", 
        component: Mechanics2,
        icon: <Icon as={FaPersonRunning} width='20px' height='20px' color='inherit' />,  
      },
    ],
  },
  {
    name: "Física Calor y Ondas",
    layout: "/admin",
    icon: <Icon as={BsFire} width='20px' height='20px' color='inherit' />,
    path: "/heat-waves",
    component: HeatAndWaves,
    collapse: true,
    items: [
      {
        layout: "/admin",
        name: "Tubo de Kundt",
        path: "/heat-waves-1",
        component: HeatAndWaves1,
        icon: <Icon as={BsSoundwave} width='20px' height='20px' color='inherit' />, 
      },
      {
        layout: "/admin",
        name: "Termómetro",
        path: "/heat-waves-2", 
        component: HeatAndWaves2,
        icon: <Icon as={BsThermometerHalf} width='20px' height='20px' color='inherit' />,  
      },
    ],
  },
  {
    name: "Física Electricidad",
    layout: "/admin",
    path: "/electricity",
    icon: <Icon as={MdElectricBolt} width='20px' height='20px' color='inherit' />,
    component: Electricity,
    collapse: true,
    items: [
      {
        layout: "/admin",
        name: "Detector de metales",
        path: "/electricity-1",
        component: Electricity1,
        icon: <Icon as={GiMagnet} width='20px' height='20px' color='inherit' />, 
      },
      {
        layout: "/admin",
        name: "Campo magnético",
        path: "/electricity-2", 
        component: Electricity2,
        icon: <Icon as={IoMagnetOutline} width='20px' height='20px' color='inherit' />,  
      },
    ],
  },
];

export default routes;
