import React from "react";
import ItemList from "./ItemList";
import { Flex } from "@chakra-ui/react";

const ItemListContainer = () => {
 
const products = [
  {
    id: 1,
    nombre: "Cápsulas de Café Nespresso",
    descripcion:
      "Capsulas Nespresso de 4 sabores diferentes, Moka, Caramel, Vainilla y Forte",
    stock: "10",
    image: src='../assets/capsulas-1.jpg' 
  },
  {
    id: 2,
    nombre: "Cápsulas Dolce Gusto",
    descripcion:
      "Capsulas Dolce Gusto de 4 sabores diferentes, Moka, Caramel, Vainilla y Forte",
    stock: "8",
    image: src='../assets/capsulas-2.jpg' 
  },
  {
    id: 3,
    nombre: "Café Colombiano Fuerte",
    descripcion:
      "Café de Colombia grano premium de intenso sabor y estructura fuerte",
    stock: "6",
    image: src='../assets/capsulas-4.jpg' 
  },
];
console.log(products);

const getProducts = new Promise((resolve, reject) => {
      if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
    }, 2000)
   } else {
      reject(new Error("No hay productos para mostrar"))
    }
  })

  getProducts
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })

  return (
    
    <Flex>
     <ItemList products={products} />
     </Flex>
            
   
  )
}

export default ItemListContainer
