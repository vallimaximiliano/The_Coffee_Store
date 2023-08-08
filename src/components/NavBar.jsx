import React from 'react'
import { Menu, Button, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Contact from './Contact';

const NavBar = () => {
  return (
    <Flex bg="#2E2422" color="#FFD8B4">
      <Box p="4" bg="#2E2422" color="#FFD8B4">
      <Link to={"/"}>
      <Image
    boxSize='120px'
    objectFit='cover'
    src='../assets/coffeeshoplogo-no-bg.png'
    alt='The Coffee Shop Store'
  /></Link>
      </Box>
      <Spacer />
      <Box padding="10px">
      <Menu bg="#FFD8B4">
        <MenuButton bg="#FFD8B4" as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList bg="#FFD8B4">
          <MenuItem bg="#FFD8B4" color="#2E2422"><Link to={"/about"}>Nosotros</Link></MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422"><Link to={`/category/${"Máquina de Café"}`}>Máquinas de Café</Link></MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422"><Link to={`/category/${"Cápsulas de Café Nespresso"}`}>Cápsulas de Café</Link></MenuItem>
          <MenuItem bg="#FFD8B4" color="#2E2422"><Link to={"./Contact"}>Contacto</Link></MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      </Box>
      <Box>
        <Link to={"./Cart"}>
        <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
}

export default NavBar