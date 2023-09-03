  /* ----------INICIO CODIGO BARRA BUSQUEDA------------- */
  
  function showProductsList(productsArray) {
    searchResultsProducto.innerHTML = ''; // Limpiar contenido previo
    
    productsArray.forEach(item => {
      const productDiv = document.createElement('div');
      
      const productHTML = `
        <div class="producto">
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
      
      productDiv.innerHTML = productHTML;
      searchResultsProducto.appendChild(productDiv);
    });
  }
  
  const searchInputProducto = document.getElementById('search-input-producto');
  const searchResultsProducto = document.getElementById('search-results-producto');
  
  searchInputProducto.addEventListener('input', filtrarbusqueda);

  function filtrarbusqueda() {
    let searchTextProducto = searchInputProducto.value.toLowerCase();
    
    fetch("https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem("catID") + ".json")
      .then(response => response.json())
      .then(data => {
        let filteredProducts = data.products.filter(item => {
  
        const nombreLowerCase = item.name.toLowerCase(); /*para busqueda por nombre*/
        const descripcionLowerCase = item.description.toLowerCase(); /*para busqueda por descripcion*/
        return nombreLowerCase.includes(searchTextProducto) || descripcionLowerCase.includes(searchTextProducto);
    });

        if (filteredProducts.length === 0) {
          searchResultsProducto.innerHTML = '<p>No se encontraron resultados</p>';
        } else {
          showProductsList(filteredProducts);
        }
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  };
  document.addEventListener("DOMContentLoaded", filtrarbusqueda);