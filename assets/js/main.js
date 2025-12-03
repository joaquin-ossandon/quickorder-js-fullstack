// assets/js/main.js
import { getProducts } from './products.js'; // <-- FIX

const productsContainer = document.querySelector('#products-container');
const carrito = [];¿

function renderProducts() {
  const products = getProducts();
  productsContainer.innerHTML = '';

  products.forEach(product => { // <-- FIX
    const card = `
      <div class="col">
        <div class="card h-100">
          <img src="${product.imagen}" 
               class="card-img-top img-fit" 
               alt="${product.nombre}" />
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
