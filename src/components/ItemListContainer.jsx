import React from "react";
import ItemList from "./ItemList";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import img1 from "./assets/capsulas-1.jpg";
// import img2 from "./assets/capsulas-2.jpg";
// import img4 from "./assets/capsulas-4.jpg";

const ItemListContainer = () => {
  const { category } = useParams()
  const products = [
    {
      id: 1,
      nombre: "Cápsulas de Café Nespresso",
      descripcion:
        "Capsulas Nespresso de 4 sabores diferentes, Moka, Caramel, Vainilla y Forte",
      stock: 10,
      category: "categoria1",
      // image: img1
    },
    {
      id: 2,
      nombre: "Cápsulas Dolce Gusto",
      descripcion:
        "Capsulas Dolce Gusto de 4 sabores diferentes, Moka, Caramel, Vainilla y Forte",
      stock: 8,
      category: "categoria2",
      // image: img2
    },
    {
      id: 3,
      nombre: "Café Colombiano Fuerte",
      descripcion:
        "Café de Colombia grano premium de intenso sabor y estructura fuerte",
      stock: 6,
      category: "categoria2",
      // image: img4
    },
    {
      id: 4,
      nombre: "Café Colombiano Fuerte 4",
      descripcion:
        "Café de Colombia grano premium de intenso sabor y estructura fuerte 4",
      stock: 6,
      category: "categoria3",
      // image: img4
    },
    {
      id: 5,
      nombre: "Café Colombiano Fuerte 5",
      descripcion:
        "Café de Colombia grano premium de intenso sabor y estructura fuerte 5",
      stock: 15,
      category: "categoria4",
      // image: img4
    },
    {
      id: 6,
      nombre: "Café Colombiano Fuerte 6",
      descripcion:
        "Café de Colombia grano premium de intenso sabor y estructura fuerte 6",
      stock: 22,
      category: "categoria6",
      // image: img4
    },
  ];
 

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error("No hay productos para mostrar"));
    }
  });

  getProducts
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

    const productosFiltrados = products.filter((products) => products.category === category)

  return (
    <Flex>
      <ItemList
      products={productosFiltrados}
      />
    </Flex>
  );
};

export default ItemListContainer
