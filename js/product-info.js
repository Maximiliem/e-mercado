/*ENTREGA Nª3 / CONSIGNA-2*/

document.addEventListener('DOMContentLoaded', function () {
  const productId = localStorage.getItem('ID_del_producto');
  
  if (productId) {
    // Realizar la solicitud para obtener los detalles del producto
    fetch(`https://japceibal.github.io/emercado-api/products/${productId}.json`)
      .then(response => response.json())
      .then(product => {
        // Construir el HTML para mostrar los detalles del producto
        const detalleProductoHTML = `
          <h1>${product.name}</h1>
          <img src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
          <p>Precio: ${product.currency} ${product.cost}</p>
          <p>Vendidos: ${product.soldCount}</p>
          <!-- Agrega aquí cualquier otra información que desees mostrar -->
        `;

        // Mostrar los detalles del producto en la página
        const detalleProductoContainer = document.getElementById('detalle-producto');
        detalleProductoContainer.innerHTML = detalleProductoHTML;
      })
   
  }
});
