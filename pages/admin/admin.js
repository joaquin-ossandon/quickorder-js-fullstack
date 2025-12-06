const pedidosData = [
  {
    id: 'ORD-00125',
    cliente: 'Juan Pérez',
    tiempo: 'Hace 5 min',
    estado: 'recibido', // recibido, preparando, listo, completado, cancelado
    total: 45.5,
    items: [
      { nombre: 'Hamburguesa Doble Queso', cant: 2, precio: 12.0 },
      { nombre: 'Bebida Cola 500ml', cant: 2, precio: 2.5 },
      { nombre: 'Papas Fritas Medianas', cant: 1, precio: 16.5 },
    ],
    nota: 'Sin pepinillos en las hamburguesas, por favor.',
  },
  {
    id: 'ORD-00124',
    cliente: 'María González',
    tiempo: 'Hace 15 min',
    estado: 'preparando',
    total: 120.0,
    items: [
      { nombre: 'Pack Familiar Sushi 40 piezas', cant: 1, precio: 80.0 },
      { nombre: 'Sake Botella', cant: 1, precio: 40.0 },
    ],
  },
  {
    id: 'ORD-00123',
    cliente: 'Local Centro',
    tiempo: 'Hace 30 min',
    estado: 'listo',
    total: 250.0,
    direccion: 'Av. Libertador 1234, Oficina 505',
    repartidor: 'Carlos M. (Moto 04)',
    items: [
      { nombre: 'Caja Papel Resma A4', cant: 5, precio: 0 },
      { nombre: 'Cartuchos Tinta Negro', cant: 2, precio: 0 },
    ],
  },
  {
    id: 'ORD-00120',
    cliente: 'Ana Torres',
    tiempo: 'Ayer',
    estado: 'completado',
    total: 15.0,
    infoExtra: 'Entregado el 02/05/2024 a las 14:30.',
  },
  {
    id: 'ORD-00119',
    cliente: 'Cliente Anónimo',
    tiempo: 'Ayer',
    estado: 'cancelado',
    total: 0.0,
    razonCancelacion: 'Cancelado por falta de stock.',
  },
];

// 2. FUNCIONES AUXILIARES (Para estilos dinámicos)
function getStatusConfig(estado) {
  switch (estado) {
    case 'recibido':
      return { color: 'secondary', icon: 'bi-inbox-fill', label: 'Recibido' };
    case 'preparando':
      return { color: 'warning', icon: 'bi-fire', label: 'Preparando' };
    case 'listo':
      return {
        color: 'primary',
        icon: 'bi-box-seam',
        label: 'Listo para Entrega',
      };
    case 'completado':
      return {
        color: 'success',
        icon: 'bi-check-circle-fill',
        label: 'Completado',
      };
    case 'cancelado':
      return { color: 'danger', icon: 'bi-x-octagon-fill', label: 'Cancelado' };
    default:
      return { color: 'secondary', icon: 'bi-question', label: 'Desconocido' };
  }
}

// 3. FUNCIÓN PRINCIPAL DE RENDERIZADO
function renderAdminPedidos(containerId, pedidos) {
  const container = document.getElementById(containerId);

  // Generar HTML de la lista de pedidos dinámicamente
  const ordersHtml = pedidos
    .map((pedido, index) => {
      const config = getStatusConfig(pedido.estado);
      const isExpanded = index === 0 ? 'show' : ''; // Solo el primero abierto por defecto
      const isCollapsedBtn = index === 0 ? '' : 'collapsed';

      // Generar contenido interior según estado (simplificado para el ejemplo)
      let itemsHtml = '';
      if (pedido.items) {
        itemsHtml = html`
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th class="w-50">Producto</th>
                  <th class="text-center">Cant.</th>
                  <th class="text-end">Total</th>
                </tr>
              </thead>
              <tbody>
                ${pedido.items
                  .map(
                    (item) => `
                      <tr>
                        <td>${item.nombre}</td>
                        <td class="text-center">${item.cant}</td>
                        <td class="text-end fw-bold">$${(
                          item.precio || 0
                        ).toFixed(2)}</td>
                      </tr>
                    `,
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        `;
      } else if (pedido.infoExtra) {
        itemsHtml = `<div class="text-center p-3 text-muted"><i class="bi bi-clock-history mb-2 fs-3 d-block"></i>${pedido.infoExtra}</div>`;
      } else if (pedido.razonCancelacion) {
        itemsHtml = `<div class="alert alert-danger border-0 d-flex align-items-center"><i class="bi bi-exclamation-triangle-fill me-2"></i><div>${pedido.razonCancelacion}</div></div>`;
      }

      // Botones de acción dinámicos
      let actionsHtml = '';
      if (pedido.estado === 'recibido') {
        actionsHtml = `
              <div class="d-flex justify-content-end gap-2 mt-4">
                 <button class="btn btn-outline-danger btn-sm"><i class="bi bi-x-circle"></i> Rechazar</button>
                 <button class="btn btn-success btn-sm text-white"><i class="bi bi-check2-circle"></i> Aceptar</button>
              </div>`;
      }

      return html`
        <div class="accordion-item border-0 border-bottom">
          <h2 class="accordion-header" id="heading-${pedido.id}">
            <button
              class="accordion-button ${isCollapsedBtn} ${[
                'completado',
                'cancelado',
              ].includes(pedido.estado)
                ? 'bg-light'
                : ''}"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-${pedido.id}"
              aria-expanded="${index === 0}"
              aria-controls="collapse-${pedido.id}"
            >
              <div
                class="d-flex w-100 align-items-center justify-content-between pe-3 flex-wrap gap-2"
              >
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="bg-${config.color} bg-opacity-10 text-${config.color} p-2 rounded-3"
                  >
                    <i class="bi ${config.icon} fs-5"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 fw-bold">#${pedido.id}</h6>
                    <small class="text-muted">
                      ${pedido.tiempo} &bull; ${pedido.cliente}
                    </small>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 ms-auto">
                  <span
                    class="badge bg-${config.color} ${config.color === 'warning'
                      ? 'text-dark'
                      : ''} rounded-pill px-3"
                  >
                    ${config.label}
                  </span>
                  <span
                    class="fw-bold ${pedido.estado === 'cancelado'
                      ? 'text-muted text-decoration-line-through'
                      : 'text-dark'}"
                  >
                    $${pedido.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapse-${pedido.id}"
            class="accordion-collapse collapse ${isExpanded}"
            aria-labelledby="heading-${pedido.id}"
            data-bs-parent="#ordersAccordion"
          >
            <div class="accordion-body bg-light">
              <div class="card border-0">
                <div class="card-body">
                  ${pedido.nota
                    ? `<div class="mb-3 p-3 bg-warning bg-opacity-10 rounded border border-warning"><i class="bi bi-sticky-fill text-warning me-2"></i><strong>Nota:</strong> ${pedido.nota}</div>`
                    : ''}
                  ${itemsHtml} ${actionsHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // HTML Estructural Principal
  const layoutHtml = html`
    <!-- Navegación Superior -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm p-3"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler border-0 me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          class="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#"
        >
          <i class="bi bi-shop-window fs-4"></i>
          <span>AdminPanel</span>
        </a>
        <div class="ms-auto d-flex align-items-center gap-3">
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <div
                class="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-2"
                style="width: 32px; height: 32px"
              >
                A
              </div>
              <span class="d-none d-sm-inline">Admin</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow">
              <li><a class="dropdown-item" href="#">Perfil</a></li>
              <li><a class="dropdown-item text-danger" href="#">Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row flex-nowrap">
        <!-- Sidebar Desktop -->
        <div
          class="col-auto px-0 bg-white border-end shadow-sm d-none d-lg-block"
          style="min-height: 100vh; width: 250px;"
        >
          <div class="d-flex flex-column align-items-start pt-3">
            <ul class="nav nav-pills flex-column mb-auto w-100">
              <li class="nav-item w-100">
                <a href="#" class="nav-link text-dark px-4 py-3">
                  <i class="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item w-100">
                <a href="#" class="nav-link active px-4 py-3">
                  <i class="bi bi-bag-check-fill me-2"></i>
                  Pedidos
                </a>
              </li>
              <li class="nav-item w-100">
                <a href="#" class="nav-link text-dark px-4 py-3">
                  <i class="bi bi-grid me-2"></i>
                  Productos
                </a>
              </li>
              <li class="nav-item w-100">
                <a href="#" class="nav-link text-dark px-4 py-3">
                  <i class="bi bi-people me-2"></i>
                  Clientes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar Mobile (Offcanvas) -->
        <div
          class="offcanvas offcanvas-start bg-white"
          tabindex="-1"
          id="sidebarMenu"
        >
          <div class="offcanvas-header bg-dark text-white">
            <h5 class="offcanvas-title">Menú</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body p-0">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link text-dark p-3">
                  <i class="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active p-3">
                  <i class="bi bi-bag-check-fill me-2"></i>
                  Pedidos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contenido Principal -->
        <div class="col py-4 px-4 bg-light">
          <!-- Header -->
          <div class="row mb-4 align-items-center">
            <div class="col-md-6">
              <h2 class="fw-bold text-dark">Gestión de Pedidos</h2>
              <p class="text-muted">
                Visualiza y actualiza el estado de las órdenes.
              </p>
            </div>
            <div class="col-md-6 text-end">
              <button class="btn btn-primary rounded-pill">
                <i class="bi bi-plus-lg me-1"></i>
                Crear Pedido
              </button>
            </div>
          </div>

          <!-- KPI Cards (Resumen) -->
          <div class="row g-3 mb-4">
            <div class="col-6 col-md-3">
              <div
                class="card border-0 shadow-sm border-start border-4 border-warning h-100"
              >
                <div class="card-body">
                  <div class="text-muted small text-uppercase fw-bold">
                    Pendientes
                  </div>
                  <div class="h2 mb-0 fw-bold text-warning">
                    ${pedidos.filter((p) => p.estado === 'recibido').length}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div
                class="card border-0 shadow-sm border-start border-4 border-success h-100"
              >
                <div class="card-body">
                  <div class="text-muted small text-uppercase fw-bold">
                    Completados
                  </div>
                  <div class="h2 mb-0 fw-bold text-success">
                    ${pedidos.filter((p) => p.estado === 'completado').length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Filtros -->
          <ul class="nav nav-pills mb-4 gap-2 overflow-auto flex-nowrap pb-2">
            <li class="nav-item">
              <button class="nav-link active rounded-pill px-4">Todos</button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link rounded-pill px-3 border bg-white text-secondary"
              >
                <i class="bi bi-inbox-fill me-1"></i>
                Recibidos
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link rounded-pill px-3 border bg-white text-secondary"
              >
                <i class="bi bi-fire me-1"></i>
                Preparando
              </button>
            </li>
          </ul>

          <!-- Lista de Pedidos (Accordion Dinámico) -->
          <div
            class="accordion shadow-sm rounded-3 overflow-hidden"
            id="ordersAccordion"
          >
            ${ordersHtml}
          </div>

          <!-- Paginación -->
          <nav class="mt-4">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#">Anterior</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Siguiente</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = layoutHtml;
}

// 4. EJECUTAR AL CARGAR
document.addEventListener('DOMContentLoaded', () => {
  renderAdminPedidos('app-container', pedidosData);
});
