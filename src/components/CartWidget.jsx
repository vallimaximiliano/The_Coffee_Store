import { Flex, Box, Image, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ShopCartContext";

const CartWidget = () => {
  const contador = useContext(CartContext)
  return (
    <Flex padding="10px">
      <Box boxSize="40px">
        <Image src="../assets/shop-mug.png" alt="Carrito de compras" />
      </Box>
      <Spacer />
      <Box fontSize='xl'>
        <p>5</p>
        </Box>
    </Flex>
  );
};

export default CartWidget;
