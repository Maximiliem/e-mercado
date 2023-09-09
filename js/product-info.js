document.addEventListener("DOMContentLoaded", () => {
    // Código para obtener la categoría de cada producto en función de la que se elija
    const productID = localStorage.getItem("id");
    const productsInfo = `https://japceibal.github.io/emercado-api/products/${productID}.json`;
    let listaInfo = "";


    function mostrarInfo(data){
    const obtenerProducto = document.getElementsByClassName("producto");
    obtenerProducto.addEventListener("click", (item)=>{
        listaInfo = `<div class="productoinfo">
     <img class="imagenCars" src=${item.images[0]}>

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
     <img class="imagenCars" src=${item.images[1]}   
     <img class="imagenCars" src=${item.images[2]}
     <img class="imagenCars" src=${item.images[3]}
   </div>
   <hr>
      `;

    })
}

    fetch(productsInfo)
    // Cuando la respuesta de la solicitud se recibe, la convertimos a formato JSON
    .then((response) => response.json())
    // Después de convertir la respuesta a JSON, llamamos a la función mostrarProductos con los datos
    .then((data) => {
      // Mostrar productos por defecto al cargar la página
      mostrarInfo(data);

});





});

