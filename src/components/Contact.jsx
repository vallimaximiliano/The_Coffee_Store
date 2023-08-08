import React from 'react'
import { Flex, Box, Divider } from '@chakra-ui/react'

const Contact = () => {
  return (
    <>
      <Flex bg="#2E2422" color="#FFD8B4">
        <Box p="4" bg="#2E2422" color="#FFD8B4">
          The Coffee Store 
          <Divider />
          Aquí tendremos un formualrio de contacto para que nos envíes tus consultas.
        </Box>
      </Flex>
    </>
  )
}

export default Contact