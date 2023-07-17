import { Box } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Box bg="#2E2422" color="#FFD8B4">
        <p>{greeting}</p>
    </Box>
  )
}

export default ItemListContainer