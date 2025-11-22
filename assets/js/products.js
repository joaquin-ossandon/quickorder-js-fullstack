// products.js
// MODELO: Array de productos (objeto literal con 10 ítems)
export const productosData = [
  {
    id: 1,
    nombre: "Pizza Margarita",
    categoria: "Pizzas",
    precio: 11000,
    descripcion: "La clásica: salsa de tomate, Mozzarella fresca y albahaca.",
    imagen: "https://static.vecteezy.com/system/resources/previews/022/994/042/non_2x/the-pepperoni-pizza-and-a-piece-of-streched-cheese-pizza-with-ai-generated-free-photo.jpg",
  },
  {
    id: 2,
    nombre: "Pizza Pepperoni",
    categoria: "Pizzas",
    precio: 12500,
    descripcion: "Pepperoni, salsa de tomate, queso Mozzarella.",
    imagen: "https://static.vecteezy.com/system/resources/previews/022/994/042/non_2x/the-pepperoni-pizza-and-a-piece-of-streched-cheese-pizza-with-ai-generated-free-photo.jpg",
  },
  {
    id: 3,
    nombre: "Ensalada César",
    categoria: "Entradas",
    precio: 6000,
    descripcion: "Clásica ensalada con pollo grillado.",
    imagen: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
  },
  {
    id: 4,
    nombre: "Pasta Carbonara",
    categoria: "Platos fuertes",
    precio: 12000,
    descripcion: "Pasta cremosa con panceta y parmesano.",
    imagen: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
  {
    id: 5,
    nombre: "Hamburguesa Classic",
    categoria: "Platos fuertes",
    precio: 9500,
    descripcion: "Carne Angus, queso cheddar y vegetales frescos.",
    imagen: "https://images.pexels.com/photos/1639560/pexels-photo-1639560.jpeg",
  },
  {
    id: 6,
    nombre: "Papas Fritas",
    categoria: "Entradas",
    precio: 3500,
    descripcion: "Crujientes papas fritas con sal marina.",
    imagen: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
  },
  {
    id: 7,
    nombre: "Limonada Natural",
    categoria: "Bebidas",
    precio: 3000,
    descripcion: "Limonada refrescante hecha en casa.",
    imagen: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },
  {
    id: 8,
    nombre: "Café Americano",
    categoria: "Bebidas",
    precio: 2500,
    descripcion: "Café tostado aromático.",
    imagen: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  },
  {
    id: 9,
    nombre: "Tiramisú",
    categoria: "Postres",
    precio: 5500,
    descripcion: "Postre italiano clásico.",
    imagen: "https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg",
  },
  {
    id: 10,
    nombre: "Helado Artesanal",
    categoria: "Postres",
    precio: 4000,
    descripcion: "Helado artesanal de vainilla con chips.",
    imagen: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
  },
];

// FUNCIÓN LECTORA: getProducts() que devuelve los datos usando sintaxis de Objetos y Arreglos
export function getProducts() {
  return productosData;
}
