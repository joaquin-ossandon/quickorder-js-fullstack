const categoriesModel = [
  'bebidas',
  'saludables',
  'naturales',
  'artesanales',
  'sin azúcares añadidos',
];

const offerModel = {
  price: 1800,
  available: true,
  until: '2025-12-31',
};

const productModel = {
  id: 1,
  name: 'Jugo de frambuesa natural',
  price: 2000,
  offer: offerModel,
  categories: categoriesModel,
  stock: 15,
  description: 'Jugo 100% natural de frambuesa, sin azúcares añadidos.',
  imageUrl: 'assets/images/jugo-frambuesa.jpg',
  available: true,
};
