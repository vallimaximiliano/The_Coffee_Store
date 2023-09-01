import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Center,
  CardHeader,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/ShopCartContext";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  
  const { cart, setCart, comision } = useContext(CartContext)

  const productosFiltrados = products.filter((products) => products.id == id);
  const acumuladoCarrito = [...cart]


  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const handleOnAdd = (contador) => {
    setCantidadAgregada(contador);
    const producto = {id, contador};
    setCart(prevCart => [...prevCart, producto]);
}


  return (
    <div>
      {productosFiltrados.map((p) => {
        return (
          <>
            <Flex bg="#2E2422" color="#FFD8B4">
              <div key={p.id}>
                <Center p="1rem">
                  {/* //estilo de la card */}
                  <Card bg="#19110F" color="#FFD8B4">
                    <CardHeader>
                      <Heading size="lg">{p.nombre}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{p.descripcion}</Text>
                      <Text><Box>Categoria:</Box>{p.category}</Text>
                      
                      
                      {
                        cantidadAgregada > 0 ? (
                          <Link to="../Cart">Terminar compra</Link>
                        ) : (
                          <ItemCount initial={1} onAdd={handleOnAdd} />
                        )
                      }
                      </CardBody>
                  </Card>
                </Center>
              </div>
            </Flex>
          </>
        );
      })}
    </div>
  );
};

export default ItemDetail;
