import { Flex, Box, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from "../context/ShopCartContext";



const Cart = () => {
  const { cart, setCart, comision } = useContext(CartContext)

  
  return (
    <>
      <Flex bg="#2E2422" color="#FFD8B4">
        <Box p="4" bg="#2E2422" color="#FFD8B4">
          <h1>{cart.length} Carrito</h1>
          <p>{comision}</p>
          <p>id: {cart.id} </p>
          <p>Producto seleccionado: {cart.nombre} </p>
          <p>Categoría: {cart.category} </p>
          <p>Cantidad: {cart.contador} </p>
          
          
        </Box>
      </Flex>
 
    </>
  )
}

export default Cart