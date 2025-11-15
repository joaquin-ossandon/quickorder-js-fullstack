$(".card .card-body .btn").on("click", function () {
  $(this).html("Hola, soy un nuevo <strong>HTML</strong>");
});

$("#userEmail, #userPassword").on("input", function () {
  const nextElement = $(this).next();
  const inputType = $(this).attr("type");
  const passLen = $(this).val().length;

  if (nextElement) {
    $(nextElement).remove();
  }

  if (inputType === "password" && passLen <= 6) {
    $(this).after(
      '<p class="small text-danger">La contraseña de tener al menos 7 caracteres.<p>'
    );
  }
});

$(document).ready(function () {
  $(".image-popup-no-margins").magnificPopup({ type: "image" });
});
