/* 
CONSIGNA 2
recuperar los id del localstorage anterior en products.js y hacer fetch al json de product-info en función a cada id de cada producto 
*/
// document.addEventListener("DOMContentLoaded", function (){
const recuperarId = localStorage.getItem("productoSeleccionado");
const urlRecuperacion = `https://japceibal.github.io/emercado-api/products/${recuperarId}.json`;
const infoEnContenedor = document.getElementsByClassName('container');
// mostrarEnContenedor();

// function mostrarEnContenedor(){
//     fetch(urlRecuperacion)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("sufrimiento 1");
//       mostrarInner(data.collection.items);
//     })
//     .catch((error) => {
//       console.error("Error al realizar la petición:", error);
//       console.log("sufrimiento 2");
//     });
// };

//     function mostrarInner(items) {
//         infoEnContenedor.innerHTML = "";

//         const nombre = item.links[0].name;
//         const descripcion = item.data[0].description;
//         const costo = item.data[0].cost;
//         const moneda = item.data[0].currency;
//         const cantidadVendidos = item.data[0].soldCount;
//         // aca van las imagenes

//         const itemsObtenidos = document.createElement("div");
//         itemsObtenidos.classList.add("items-resultantes");
//         itemsObtenidos.innerHTML = `
//         <h3>${nombre}</h3>
//         <p>${descripcion}</p>
//         <p>${moneda} Precio: ${costo}</p>
//         <p>Cantidad de vendidos: ${cantidadVendidos}</p>
//         <img src="${imageUrl}" alt="${title}">
//         `;

//         infoEnContenedor.appendChild(itemsObtenidos);

//     }
// });


//  CÓDIGO DEL BARDO GUGLE
document.addEventListener("DOMContentLoaded", function (){
    data.products.forEach((item) => {
      // Recuperar el identificador del producto
      const idProducto = item.id;
  
      // Guardar el identificador del producto en el almacenamiento local
      localStorage.setItem("productoSeleccionado", idProducto);
  
      // Mostrar la información del producto
      mostrarEnContenedor();
    });
  });
  
  function mostrarEnContenedor(){
      // Cambiar la URL de la solicitud HTTP
      const urlRecuperacion = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productoSeleccionado")}.json`;
    
      // Mostrar la información del producto
      fetch(urlRecuperacion)
      .then((response) => response.json())
      .then((data) => {
        mostrarInner(data.collection.items);
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
      });
  };
  
  function mostrarInner(items) {
      infoEnContenedor.innerHTML = "";

      // Definir las constantes
      const nombre = item.links[0].name;
      const descripcion = item.data[0].description;
      const costo = item.data[0].cost;
      const moneda = item.data[0].currency;
      const cantidadVendidos = item.data[0].soldCount;
  
      // Mostrar la información del producto
      const itemsObtenidos = document.createElement("div");
      itemsObtenidos.classList.add("items-resultantes");
      itemsObtenidos.innerHTML = `
          <h3>${nombre}</h3>
          <p>${descripcion}</p>
          <p>${moneda} Precio: ${costo}</p>
          <p>Cantidad de vendidos: ${cantidadVendidos}</p>
          <img src="${imageUrl}" alt="${title}">
          `;
  
      infoEnContenedor.appendChild(itemsObtenidos);
  };
  
  