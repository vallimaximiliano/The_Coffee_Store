import React from 'react'
import { Menu, Button, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex bg="#2E2422" color="#FFD8B4">
      <Box p="4" bg="#2E2422" color="#FFD8B4">
      <Image
    boxSize='100px'
    objectFit='cover'
    src='../assets/coffeeshoplogo-no-bg.png'
    alt='The Coffee Shop Store'
  />
      </Box>
      <Spacer />
      <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Cafeteras Expresso</MenuItem>
          <MenuItem>Cafeteras Cápsulas</MenuItem>
          <MenuItem>Cápsulas de Café</MenuItem>
          <MenuItem>Café</MenuItem>
          <MenuItem>Contacto</MenuItem>
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