import {useEffect, useState} from 'react'
import { Box, Button, Flex, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = ({initial, onAdd}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0)
 

const [contador, setContador]=useState(0)

useEffect(()=>{

},[contador])

const sumar =()=>{
    setContador(contador + 1)
}
const restar =()=>{
    if (contador > 1) {
        setContador(contador - 1)
    }
    
}
const reset =()=>{
    setContador(0)
}

  return (
    <Flex bg="#2E2422">
    <Box margin="20px" color="#FFD8B4">{contador}</Box>
    <IconButton onClick={sumar} icon={<AddIcon />} color="#2E2422" margin="5px"></IconButton>
    <IconButton onClick={restar} icon={<MinusIcon />} color="#2E2422" margin="5px"></IconButton>
    <Button onClick={reset} margin="5px">Reset</Button>
    <Button onClick={()=> onAdd(contador)} margin="5px">Agregar al Carrito</Button>
    
    </Flex>
  )
}

export default ItemCount