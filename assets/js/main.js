// assets/js/main.js
const productsContainer = document.querySelector('#products-container');
const carrito = [];

function renderProducts() {
  const products = getProducts();

  productsContainer.innerHTML = ''; // Limpia el contenedor

  products.forEach((product) => {
    const card = `
        <div class="col">
          <div class="card h-100">
            <img src="${product.imagen}" class="card-img-top img-fit" alt="${
      product.nombre
    }" />

            <div class="card-body justify-content-around d-flex flex-column">
              <h5 class="card-title fw-bold mb-1">${product.nombre}</h5>

              <h6 class="card-subtitle mb-2 text-body-secondary">
                $${product.precio.toLocaleString()}
              </h6>

              <p class="card-text line-clamp-2" title="${product.descripcion}">
                ${product.descripcion}
              </p>

              <button class="btn btn-primary w-100 py-2 justify-content-end">
                <i class="bi bi-cart-plus me-2"></i> Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      `;

    productsContainer.innerHTML += card;
  });
}
renderProducts();

function addToCart(productId) {
  const products = getProducts();
  const product = products.find((p) => p.id === productId);

  if (product) {
    carrito.push(product);
    console.log('Producto agregado al carrito:', product);
    console.log('Carrito actual:', carrito);

    renderCart(); // Update UI
    alert(`¡${product.nombre} agregado al carrito!`);
  } else {
    console.error('Producto no encontrado');
  }
}

function renderCart() {
  const cartItemsContainer = document.querySelector('#cart-items');
  const cartTotalElement = document.querySelector('#cart-total');
  const badge = document.querySelector('.badge-cart');

  // Clear current items
  cartItemsContainer.innerHTML = '';

  let total = 0;

  carrito.forEach((item) => {
    total += item.precio;

    const li = document.createElement('li');
    li.className =
      'list-group-item d-flex justify-content-between align-items-center px-0';
    li.innerHTML = `
      <div class="d-flex align-items-center">
        <i class="bi bi-cart-check text-success me-3"></i>
        <span class="fw-normal">${item.nombre}</span>
      </div>
      <span class="fw-bold">$${item.precio.toLocaleString()}</span>
    `;
    cartItemsContainer.innerHTML += li.outerHTML;
  });

  // Update total
  cartTotalElement.innerText = total.toLocaleString();

  // Update badge
  if (badge) {
    badge.innerText = carrito.length;
    if (carrito.length > 0) {
      badge.classList.remove('visually-hidden');
    } else {
      badge.classList.add('visually-hidden');
    }
  }
}

renderCart();
