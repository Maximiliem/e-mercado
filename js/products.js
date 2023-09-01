
// Esperar hasta que el contenido del DOM (estructura HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Obtener el primer elemento con la clase "lista-cars" que fue añadida en products.html
  const listaCars = document.getElementsByClassName("lista-cars")[0];

  // Código para obtener la categoría de cada producto en función a la que se elija
  const catID = localStorage.getItem("catID");
  const productsData = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

  // Realizar una solicitud a la URL proporcionada usando el método fetch
  fetch(productsData)

    // Cuando la respuesta de la solicitud se recibe, la convertimos a formato JSON
    .then((response) => response.json())

    // Después de convertir la respuesta a JSON, trabajamos con los datos obtenidos
    .then((data) => {

      // Inicializar una variable para almacenar el HTML que vamos a generar
      let listaHtml = "";

      // Iterar a través de los elementos en el arreglo "products" dentro de los datos
      let arrayProducts = data.products;
      function showProducts(products) {
      products.forEach((item) => {

        // Mostrar en la consola la información del producto actual
        console.log(item);

        // Generar el fragmento de HTML para mostrar la información del producto
        listaHtml.innerHTML += `<div class="producto">
         <img class="imagenCars" src=${item.image}>
         
            <div class="divTexto">

                <div class="divNombre">
                    <p class="nombre">${item.name}</p>
                </div>

               <div class="divDescripcion">
                    <p class="descripcion">${item.description}</p>
                </div>

                <div class="divPrecio">
                    <p class="precio">Precio: ${item.currency} ${item.cost}</p>
                </div>

                <div class="divVendidos">
                    <p class="vendidos">Vendidos: ${item.soldCount}</p>
                </div>
            </div>
       </div>
       <hr>`;
      });

/*Funcionalidades de filtrado y orden*/

function filtrados(products) {
  const filteredProducts = products.filter((product) => {
  return product.cost >= precioMin && product.cost <= precioMax;
  });
  showProducts(filteredProducts)
  console.log(filteredProducts);
}
filtrar.addEventListener("click", () =>{
filtrados(arrayProducts)
}) 

      // Asignar el HTML generado a la estructura con la clase "lista-cars"
      listaCars.innerHTML = listaHtml;
 } })

    // En caso de error en la solicitud o en el manejo de datos, mostrar un mensaje de error en la consola
    .catch((error) => {
      console.error("Error en la solicitud fetch:", error);
    });





});
