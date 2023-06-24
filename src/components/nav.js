import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Navbar() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box as="nav" bg={bgColor} color={textColor} py={4} px={6} shadow="md">
      <Flex justify="space-between" align="center">
        <Box>
          {/* Logo */}
          <Box as="span" fontWeight="bold" fontSize="3xl">
            TraGos
          </Box>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            icon={<HamburgerIcon />}
            onClick={handleDrawerToggle}
          />
        </Box>
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Button variant="ghost" mr={4}>
            HOME
          </Button>
          <Button variant="ghost" mr={4}>
            ABOUT US
          </Button>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={4}>
              BOOKING TERMS <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList>
              <MenuItem>Suboption 1</MenuItem>
              <MenuItem>Suboption 2</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={4}>
              FLIGHT <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList>
              <MenuItem>Suboption 1</MenuItem>
              <MenuItem>Suboption 2</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="ghost" mr={4}>
            GET IN TOUCH
          </Button>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Button variant="ghost">HOME</Button>
              <Button variant="ghost">ABOUT US</Button>
              <Menu>
                <MenuButton as={Button} variant="ghost">
                  BOOKING TERMS <ChevronDownIcon ml={2} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Suboption 1</MenuItem>
                  <MenuItem>Suboption 2</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton as={Button} variant="ghost">
                  FLIGHT <ChevronDownIcon ml={2} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Suboption 1</MenuItem>
                  <MenuItem>Suboption 2</MenuItem>
                </MenuList>
              </Menu>
              <Button variant="ghost">GET IN TOUCH</Button>
              <ColorModeSwitcher />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
