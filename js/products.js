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
            `
        });
  
        // Asignar el HTML generado a la estructura con la clase "lista-cars"
        listaCars.innerHTML = listaHtml;
      })
  
      // En caso de error en la solicitud o en el manejo de datos, mostrar un mensaje de error en la consola
      .catch((error) => {
        console.error("Error en la solicitud fetch:", error);
      });
  });
  
/*   const ARTICULOS = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json"
 */

/*   const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  searchInput.addEventListener('input', () => {
      let searchText = searchInput.value.toLowerCase();
    
      let filteredProducts = productsArray.products.filter(product => 
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) 
      );
    
      if (filteredProducts.length === 0) {
        searchResults.innerHTML = '';
        searchResults.innerHTML = '<p>No se encontraron resultados</p>';
      } else {
        showProductsList(filteredProducts);
      }
  }); */

  const searchInputProducto = document.getElementById('search-input-producto');
  const searchResultsProducto = document.getElementById('search-results-producto');
  
  searchInputProducto.addEventListener('input', () => {
    let searchTextProducto = searchInputProducto.value.toLowerCase();
    
    fetch("https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem("catID") + ".json")
      .then(response => response.json())
      .then(data => {
        let filteredProducts = data.products.filter(product => product.name.toLowerCase().includes(searchTextProducto));
  
        if (filteredProducts.length === 0) {
          searchResultsProducto.innerHTML = '<p>No se encontraron resultados</p>';
        } else {
          showProductsList(filteredProducts);
        }
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  });

  /* ----------INICIO CODIGO BARRA BUSQUEDA------------- */
  
  function showProductsList(productsArray) {
    searchResultsProducto.innerHTML = ''; // Limpiar contenido previo
    
    productsArray.forEach(product => {
      const productDiv = document.createElement('div');
      
      const productHTML = `
        <div class="producto">
          <img class="imagenCars" src=${product.image}>
          <div class="divTexto">
            <div class="divNombre">
              <p class="nombre">${product.name}</p>
            </div>
            <div class="divDescripcion">
              <p class="descripcion">${product.description}</p>
            </div>
            <div class="divPrecio">
              <p class="precio">Precio: ${product.currency} ${product.cost}</p>
            </div>
            <div class="divVendidos">
              <p class="vendidos">Vendidos: ${product.soldCount}</p>
            </div>
          </div>
        </div>
        <hr>
      `;
      
      productDiv.innerHTML = productHTML;
      searchResultsProducto.appendChild(productDiv);
    });
  }

const productsArray = "https://japceibal.github.io/emercado-api/cats_products/"+localStorage.getItem("catID")+".json";

searchInputProducto.addEventListener('input', () => {
    let searchTextProducto = searchInputProducto.value.toLowerCase();
  
    let filteredProducts = productsArray.products.filter(product => product.name.toLowerCase().includes(searchTextProducto));
  
    if (filteredProducts.length === 0) {
        searchResultsProducto.innerHTML = '';
        searchResultsProducto.innerHTML = '<p>No se encontraron resultados</p>';
    } else {
      showProductsList(filteredProducts);
    }
  });


 