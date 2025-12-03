<<<<<<< HEAD
// assets/js/main.js
const productsContainer = document.querySelector('#products-container');
const carrito = [];

function renderProducts() {
  const products = getProducts();

  productsContainer.innerHTML = ''; // Limpia el contenedor
=======
$('.card .card-body .btn').on('click', function () {
  $(this).html('Hola, soy un nuevo <strong>HTML</strong>');
});

$('#userEmail, #userPassword').on('input', function () {
  const nextElement = $(this).next();
  const inputType = $(this).attr('type');
  const passLen = $(this).val().length;
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312

  products.forEach((product) => {
    const card = `
        <div class="col">
          <div class="card h-100">
            <img src="${product.imagen}" class="card-img-top img-fit" alt="${
      product.nombre
    }" />

<<<<<<< HEAD
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
=======
  if (inputType === 'password' && passLen <= 6) {
    $(this).after(
      '<p class="small text-danger">La contraseña de tener al menos 7 caracteres.<p>',
    );
  }
});

var red = "red"
>>>>>>> b46b8fa870bc7a3032eb20e6932ed8df4c382312
