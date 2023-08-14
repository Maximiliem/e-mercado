const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const container = document.querySelector("pb-5 container"); //ver el tema de un querySelector
/*
Para esto me parece que hay que apoyarse en el ejercicio 7.2.1.Fetch
porque tiene pinta de ser muy similar
 */
function showData(dataArray){
    for (const item of dataArray){
        container.innerHTML += `<div>
        ${item.image}
        ${item.name}
        ${item.description}
        ${item.currency}
        ${item.cost}
        ${item.soldCount}
        </div>`
    }
}


async function loadData(){
    const response = await fetch(DATA_URL);
    const data = await response.json();
    showData(data.products)
}

loadData();

/*
document.addEventListener("DOMContentLoaded", () => {
  const listaCars = document.getElementsByClassName("lista-cars")[0];
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

*/