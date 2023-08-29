 // Esperar hasta que el contenido del DOM (estructura HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Obtener el primer elemento con la clase "lista-cars" que fue añadida en products.html
  const listaCars = document.getElementsByClassName("lista-cars")[0];

  // Realizar una solicitud a la URL proporcionada usando el método fetch
  fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")

    // Cuando la respuesta de la solicitud se recibe, la convertimos a formato JSON
    .then((response) => response.json())

    // Después de convertir la respuesta a JSON, trabajamos con los datos obtenidos
    .then((data) => {

      // Inicializar una variable para almacenar el HTML que vamos a generar
      let listaHtml = "";

      // Iterar a través de los elementos en el arreglo "products" dentro de los datos
      data.products.forEach((item) => {

        // Mostrar en la consola la información del producto actual
        console.log(item);

        // Generar el fragmento de HTML para mostrar la información del producto
        listaHtml += `<div class="producto">
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
       <hr>
          `;
      });

      // Asignar el HTML generado a la estructura con la clase "lista-cars"
      listaCars.innerHTML = listaHtml;
    })

    // En caso de error en la solicitud o en el manejo de datos, mostrar un mensaje de error en la consola
    .catch((error) => {
      console.error("Error en la solicitud fetch:", error);
    });
});

/* const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', ()=> {
  let searchText = searchInput.value.toLowerCase();

  let a = productsArray.products.filter(product => product.name.toLowerCase().includes(searchText));
  showProductsList(a);
});
 */



function sortAndShowCategories(sortCriteria){
    
    ordenado = sortProducts(sortCriteria, productsArray.products);

    showProductsList(ordenado);
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(ARTICULOS).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray.products); 
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_PRICE);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_SOLDCOUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList(productsArray.products);
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList(productsArray.products);
    });
});

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', ()=> {
  let searchText = searchInput.value.toLowerCase();

  let a = productsArray.products.filter(product => product.name.toLowerCase().includes(searchText));
  showProductsList(a);
});