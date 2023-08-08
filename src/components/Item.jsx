import React from 'react'
import { Card, Image, CardBody, Heading, Text, Stack, CardFooter, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ( { id, nombre,  descripcion, stock, category } ) => {
  return (
    <Card maxW='sm' bg="#19110F" color="#FFD8B4">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        {descripcion}
      </Text>
      <Text>
        {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>Stock:
        {stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={`/item/${id}`}><Button variant='solid' colorScheme='blue'>
        Detalle
      </Button></Link>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item