import React from 'react'
import { Card, Image, CardBody, Heading, Text, Stack, CardFooter, Divider, Button, ButtonGroup } from '@chakra-ui/react'

const Item = ( {id, nombre, image, descripcion, stock} ) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image>{image}
    </Image>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        {descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item