import React from 'react'
import { Menu, Button, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex bg="#2E2422" color="#FFD8B4">
      <Box p="4" bg="#2E2422" color="#FFD8B4">
      <Image
    boxSize='120px'
    objectFit='cover'
    src='../assets/coffeeshoplogo-no-bg.png'
    alt='The Coffee Shop Store'
  />
      </Box>
      <Spacer />
      <Box padding="10px">
      <Menu bg="#FFD8B4">
        <MenuButton bg="#FFD8B4" as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList bg="#FFD8B4">
          <MenuItem bg="#FFD8B4" color="#2E2422">Cafeteras Expresso</MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422">Cafeteras Cápsulas</MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422">Cápsulas de Café</MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422">Café</MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422">Contacto</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      </Box>
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
}

export default NavBar