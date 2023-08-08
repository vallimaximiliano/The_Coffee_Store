import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Center,
  CardHeader,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  console.log(products);
  const productosFiltrados = products.filter((products) => products.id == id);

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
                      <Heading size="md">{p.nombre}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{p.descripcion}</Text>
                      <Text>{p.category}</Text>
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
