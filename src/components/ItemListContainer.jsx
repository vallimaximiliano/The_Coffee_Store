import React from "react";
import ItemList from "./ItemList";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams()
  const products = [
    {
      id: 1,
      nombre: "Cápsulas Estambul",
      descripcion:
        "PERFIL AROMÁTICO: World Explorations Istanbul Espresso te transporta en el tiempo a las primeras cafeterías. Este intenso y ambicioso café rebosa de audacia, frutas silvestres maduras y un delicado toque a almendra. Denso y aterciopelado en homenaje al café turco, su Arabica etíope y su Robusta de la India nos recuerdan a esta ciudad en la encrucijada de las antiguas rutas comerciales del café. Un café que aporta notas a frutas silvestres y especias y un delicado toque de almendra que recorre un cuerpo aterciopelado. Es una mezcla tan cosmopolita como la multitud que se reúne en una cafetería de Estambul.",
      stock: 12,
      category: "Cápsulas de Café Nespresso",
     
    },
    {
      id: 2,
      nombre: "Cápsulas Río de Janeiro",
      descripcion:
        "PERFIL AROMÁTICO: Encarnando el espíritu de esta animada y colorida ciudad, World Explorations Rio de Janeiro Espresso refleja la arraigada herencia del país tanto en el cultivo como en el consumo de café. Un Espresso intenso, exótico y aterciopelado, elaborado exclusivamente con Arabicas brasileños. Su toque único de madera de sándalo y notas herbales, te permitirán conocer el estilo de vida brasileño.",
      stock: 35,
      category: "Cápsulas de Café Nespresso",
      
    },
    {
      id: 3,
      nombre: "Cápsulas Caramell",
      descripcion:
        "PERFIL AROMÁTICO: Inspirado en los postres y en los recuerdos que estos nos traen, Caramello es un café donde el sabor dulce y notas a nuez se encuentran con los granos Arábica sudamericanos y sus características notas a galleta. Un blend creado por nuestros expertos que nos hará rememorar hermosos momentos. Este blend deleita con el clásico sabor a caramelo combinado con notas dulces de galleta y nuez.",
      stock: 40,
      category: "Cápsulas de Café Nespresso",
      
    },
    {
      id: 4,
      nombre: "Cápsulas Tokyo Lungo",
      descripcion:
        "PERFIL AROMÁTICO: Conocidos por su té, los japoneses también tienen afinidad por el café. Luchando por la sofisticación y dulzura natural, aman tanto un rico café como un equilibrio de aromas elegantes. Tokyo Vivalto Lungo combina delicadas notas florales, ligeramente tostadas y un toque frutal para lograr un perfil equilibrado y complejo.",
      stock: 33,
      category: "Cápsulas de Café Nespresso",
      
    },
    {
      id: 5,
      nombre: "Cápsulas Oskuro",
      descripcion:
        "PERFIL AROMÁTICO: Arábicas lavados de Costa Rica y Cundinamarca, región de Colombia, entre otros orígenes. Un Complejo blend de tueste medio a oscuro de sabrosos granos de café, que están tostados y finamente molidos. Revela aromas ricos y complejos de chocolate amargo y notas tostadas cuando se combina con leche.",
      stock: 15,
      category: "Cápsulas de Café Nespresso",
      
    },
    {
      id: 6,
      nombre: "Cápsulas Cosi",
      descripcion:
        "PERFIL AROMÁTICO: Los Arábicas de Costa Rica aportan a la mezcla sus características notas de cereales y ligeramente tostadas, mientras que los mejores Arábicas de Kenia revelan sus delicadas notas frutales. Los Arábicas de América Central y del Sur se encargan de armonizar el conjunto. El tueste ligero ejecutado a la perfección por los expertos en tueste de Nespresso crea una combinación delicada y equilibrada entre las notas de cereales y ligeramente tostadas y las notas frutales.",
      stock: 22,
      category: "Cápsulas de Café Nespresso",
      
    },
    {
      id: 7,
      nombre: "ESSENZA MINI C BLACK",
      descripcion:
        "MÁQUINA PEQUEÑA, GRAN CAFÉ. Nespresso ha concentrado su know-how y sus conocimientos especializados en un diseño completamente nuevo del que ha surgido su máquina más compacta hasta la fecha (sin que el sabor del café se vea afectado). La máquina Essenza Mini combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta.",
      stock: 22,
      category: "Máquina de Café",
      
    },
    {
      id: 8,
      nombre: "CITIZ CHROME",
      descripcion:
        "PARA LOS AMANTES DEL CAFÉ Y EL BUEN DISEÑO: Creada para los amantes de Nespresso y del diseño moderno. Inspirada en la arquitectura urbana, todos los caminos conducen a la cafetera Nespresso CitiZ Chrome. Es delgada, estable y tiene un toque único de elegancia retro-moderna que la convierte en un objeto de admiración constantemente renovado. ",
      stock: 8,
      category: "Máquina de Café",
      
    },
    {
      id: 9,
      nombre: "ATELIER",
      descripcion:
        "RECETAS DE CAFETERÍA A UN TOQUE: La combinación perfecta de ingredientes no ocurre por casualidad. Nespresso Atelier crea la mezcla absoluta de café, desde Latte y Cappuccino hasta Flat White.",
      stock: 16,
      category: "Máquina de Café",
      
    },
    {
      id: 10,
      nombre: "GRAN LATTISSIMA WHITE",
      descripcion:
        "GRAN LATTISSIMA WHITE. RECETAS DE CAFÉ CON SOLO TOCAR UN BOTÓN. Que haya más recetas para hacer, no significa que haya que hacer más esfuerzo. Ya sea que quieras preparar un Cappuccino, un latte, un espresso con poca leche o agregar un poco de espuma de leche a tu café, dejá que la Gran Lattissima haga el trabajo.",
      stock: 2,
      category: "Máquina de Café",
      
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
    <Flex bg="#2E2422">
      { category ? <ItemList products={productosFiltrados} /> : <ItemList products={productos} />}
    </Flex>
  );
};

export default ItemListContainer
