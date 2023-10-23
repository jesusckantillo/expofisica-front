import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import VariantStyles from "components/sidebar/components/VariantStyles.css";

export function SidebarLinks(props) {
  const location = useLocation();
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("secondaryGray.600", "secondaryGray.600");
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  const isRouteActive = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes, parentRoute = "/admin") => {
    return routes.map((route, index) => {
      const fullRoutePath = parentRoute + route.path;

      if (route.category) {
        return (
          <div key={index}>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt="18px"
              pb="12px"
            >
              {route.name}
            </Text>
            {createLinks(route.items, fullRoutePath)}
          </div>
        );
      } else if (route.layout === "/admin" || route.layout === "/auth" || route.layout === "/rtl") {
        if (route.collapse) {
          const isCollapsed = collapsedRoutes[fullRoutePath] || false;

          return (
            <div key={index}>
              <div
                onClick={() => handleCollapseToggle(fullRoutePath)}
                style={{ cursor: "pointer" }}
                className={`collapse-toggle ${isCollapsed ? "collapsed" : ""}`}
              >
                <HStack
                  spacing={isCollapsed ? "22px" : "26px"}
                  py="5px"
                  ps="10px"
                  className={`hstack-container ${isRouteActive(fullRoutePath) ? "active" : ""}`}
                >
                  <Flex w="100%" alignItems="center" justifyContent="center">
                    <Box color={isCollapsed ? activeIcon : textColor} me="18px">
                      {isCollapsed ? <ChevronDownIcon /> : <ChevronRightIcon />}
                    </Box>
                    <Text
                      me="auto"
                      color={isCollapsed ? activeColor : textColor}
                      fontWeight={isCollapsed ? "bold" : "normal"}
                    >
                      {route.name}
                    </Text>
                  </Flex>
                  <Box
                    h="36px"
                    w="4px"
                    bg={isCollapsed ? brandColor : "transparent"}
                    borderRadius="5px"
                    className={`bg-box ${isRouteActive(fullRoutePath) ? "active" : ""}`}
                  />
                </HStack>
              </div>
              {isCollapsed && route.items ? (
                route.items.map((subRoute, subIndex) => (
                  <NavLink key={subIndex} to={fullRoutePath + subRoute.path}>
                    <HStack
                      spacing={isRouteActive(fullRoutePath + subRoute.path) ? "22px" : "26px"}
                      py="5px"
                      ps="10px"
                      marginLeft={"25px"}
                      borderRadius={isRouteActive(fullRoutePath + subRoute.path) ? "10px" : "0px"}
                      background={isRouteActive(fullRoutePath + subRoute.path) ? "#e2e8f0" : ""}
                      className={`hstack-container ${isRouteActive(fullRoutePath + subRoute.path) ? "active" : ""}`}
                    >
                      <Flex w="100%" alignItems="center" justifyContent="center">
                        <Box color={isRouteActive(fullRoutePath + subRoute.path) ? activeIcon : textColor} me="18px">
                          {subRoute.icon}
                        </Box>
                        <Text
                          me="auto"
                          color={isRouteActive(fullRoutePath + subRoute.path) ? activeColor : textColor}
                          fontWeight={isRouteActive(fullRoutePath + subRoute.path) ? "bold" : "normal"}
                        >
                          {subRoute.name}
                        </Text>
                      </Flex>
                      <Box
                        h="36px"
                        w="4px"
                        bg={isRouteActive(fullRoutePath + subRoute.path) ? brandColor : "transparent"}
                        borderRadius="5px"
                        className={`bg-box ${isRouteActive(fullRoutePath + subRoute.path) ? "active" : ""}`}
                      />
                    </HStack>
                  </NavLink>
                ))
              ) : null}
            </div>
          );
        } else {
          return (
            <NavLink key={index} to={fullRoutePath}>
              <HStack
                spacing={isRouteActive(fullRoutePath) ? "22px" : "26px"}
                py="5px"
                ps="10px"
                className={`hstack-container ${isRouteActive(fullRoutePath) ? "active" : ""}`}
              >
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Box color={isRouteActive(fullRoutePath) ? activeIcon : textColor} me="18px">
                    {route.icon}
                  </Box>
                  <Text
                    me="auto"
                    color={isRouteActive(fullRoutePath) ? activeColor : textColor}
                    fontWeight={isRouteActive(fullRoutePath) ? "bold" : "normal"}
                  >
                    {route.name}
                  </Text>
                </Flex>
                <Box
                  h="36px"
                  w="4px"
                  bg={isRouteActive(fullRoutePath) ? brandColor : "transparent"}
                  borderRadius="5px"
                  className={`bg-box ${isRouteActive(fullRoutePath) ? "active" : ""}`}
                />
              </HStack>
            </NavLink>
          );
        }
      }
    });
  };

  const [collapsedRoutes, setCollapsedRoutes] = useState({});

  const handleCollapseToggle = (routeName) => {
    console.log(routeName);
    console.log(collapsedRoutes);
    setCollapsedRoutes((prevCollapsedRoutes) => ({
      ...prevCollapsedRoutes,
      [routeName]: !prevCollapsedRoutes[routeName],
    }));
  };

  return createLinks(routes);
}

export default SidebarLinks;
