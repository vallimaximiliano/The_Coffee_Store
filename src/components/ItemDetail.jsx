import React from 'react'
import { Card, Image, CardBody, Heading, Text, Stack, CardFooter, Divider, Button, ButtonGroup, Center, CardHeader } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ products }) => {
    const { id } = useParams()
    const productosFiltrados = products.filter((products) => products.id == id)

  return (
    <div>
        {productosFiltrados.map((p) => {
            return (
                <div key={p.id}>
                <Center p="1rem">
                <Card>
                <CardHeader>
                <Heading size="md">{p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                <Text>{p.descripcion}</Text>
                <Text>{p.category}</Text>
                </CardBody>
                
                </Card>
                
                </Center>
                </div>
            )
        })}


    </div>
  )
}

export default ItemDetail