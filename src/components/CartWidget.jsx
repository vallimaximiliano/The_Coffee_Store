import { Flex, Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <Flex>
      <Box boxSize="40px">
        <Image src="../assets/shop-mug.png" alt="Carrito de compras" />
      </Box>
      <Spacer />
      <Box>5</Box>
    </Flex>
  );
};

export default CartWidget;
