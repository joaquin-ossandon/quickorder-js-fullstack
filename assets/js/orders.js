const ordersData = [
  {
    id: 1,
    status: "pending", // El usuario creó el pedido pero no ha pagado
    total: 45000,
    products: [
      {
        productId: "prod-001",
        description: "Cazuela de vacuno",
        quantity: 1,
        unitPrice: 45000
      }
    ]
  },
  {
    id: 2,
    status: "paid", // Listo para cocina
    total: 22000,
    products: [
      {
        productId: "prod-002",
        description: "Pastel de Choclo",
        quantity: 2,
        unitPrice: 8000
      },
      {
        productId: "prod-003",
        description: "Bebida 1.5L",
        quantity: 2,
        unitPrice: 3000
      }
    ]
  },
  {
    id: 3,
    status: "in_transit", // Salió del restaurante
    total: 15000,
    products: [
      {
        productId: "prod-004",
        description: "Chorrillana Individual",
        quantity: 1,
        unitPrice: 12000
      },
      {
        productId: "prod-005",
        description: "Empanada de Pino",
        quantity: 1,
        unitPrice: 3000
      }
    ]
  },
  {
    id: 4,
    status: "delivered", // Cliente ya comió
    total: 9000,
    products: [
      {
        productId: "prod-006",
        description: "Completo Italiano",
        quantity: 2,
        unitPrice: 3000
      },
      {
        productId: "prod-007",
        description: "Papas Fritas Medianas",
        quantity: 1,
        unitPrice: 3000
      }
    ]
  },
  {
    id: 5,
    status: "cancelled", // Pedido anulado
    total: 60000,
    products: [
      {
        productId: "prod-008",
        description: "Parrillada para 4",
        quantity: 1,
        unitPrice: 55000
      },
      {
        productId: "prod-009",
        description: "Vino Tinto Reserva",
        quantity: 1,
        unitPrice: 5000
      }
    ]
  }
];

// mostra datos
console.log("--- 2. Table View (Summary) ---");
console.table(ordersData);