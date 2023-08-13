document.addEventListener("DOMContentLoaded", () => {
  const listaCars = document.getElementsByClassName("lista-cars")[0];
  // Realizar una solicitud fetch
  fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
    .then((response) => response.json())
    .then((data) => {
      let listaHtml = "";
      data.products.forEach((item) => {
        console.log(item);
        listaHtml += `<div>
              <img class="imagenCars" src=${item.image}>
              Nombre: ${item.name}
              Descripcion: ${item.description}
              USD: ${item.currency}
              Precio: ${item.cost}
              Vendidos: ${item.soldCount}
            </div>
          `;
      });
      listaCars.innerHTML = listaHtml;
    })
    .catch((error) => {
      console.error("Error en la solicitud fetch:", error);
    });
});
