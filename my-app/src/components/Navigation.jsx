import { Box, Flex, Spacer, Button, IconButton, useDisclosure, useColorModeValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon  } from "@chakra-ui/icons";

import React from "react";
function useToggle() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen, toggle };
  }
  
  
  function useColorSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.800", "white");
  
    return { colorMode, toggleColorMode, bgColor, color };
  }

 export default function Navigation() {
    const { isOpen, toggle } = useToggle();
    const { colorMode, toggleColorMode, bgColor, color } = useColorSwitcher();
  
    return (
      <Box borderBottom="1px" borderBottomColor="gray.200">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding={{ base: "1rem", md: "1.5rem" }}
          bg={bgColor}
          color={color}
        >
          <Box>
            <Button variant="ghost" mr="4">
              Logo
            </Button>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              onClick={toggle}
              variant="ghost"
              aria-label="Toggle Navigation"
              icon={<HamburgerIcon />}
            />
          </Box>
          <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1rem", md: "2rem" }}
              align="center"
              justify={{ base: "center", md: "flex-end" }}
              pt={{ base: 4, md: 0 }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Discover</Button>
              <Button variant="ghost">Jobs</Button>
              <Button variant="ghost">Events</Button>
            </Stack>
          </Box>
          <Spacer />
          <Box>
            <Button variant="ghost" mr="4">
              Login
            </Button>
            <Button variant="solid">Sign Up</Button>
            <IconButton
              ml="4"
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle Color Mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
          </Box>
        </Flex>
        <Drawer placement="top" isOpen={isOpen} onClose={toggle}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Box p="1rem">
              <Stack
                direction="column"
                spacing="1rem"
                align="center"
                justify="center"
              >
                <Button variant="ghost" size="lg" w="full">
                  Home
                </Button>
                <Button variant="ghost" size="lg" w="full">
                  Discover
                </Button>
                <Button variant="ghost" size="lg" w="full">
                  Jobs
                </Button>
                <Button variant="ghost" size="lg" w="full">
                  Events
                </Button>
                <Button variant="solid" size="lg" w="full">
                  Sign Up
                </Button>
                <IconButton
                  onClick={toggleColorMode}
                  variant="ghost"
                  aria-label="Toggle Color Mode"
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                />
              </Stack>
            </Box>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
 