import { Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex bg="#2E2422" color="#FFD8B4" justify="center">
        <p>{greeting}</p>
    </Flex>
    
  )
}

export default ItemListContainer