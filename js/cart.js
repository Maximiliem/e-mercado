document.addEventListener("DOMContentLoaded",()=>{
    const cartUrl = "https://japceibal.github.io/emercado-api/user_cart/25801.json";

 // Realizar la solicitud Fetch para obtener el carrito de compras
fetch(cartUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al obtener el carrito de compras.");
    }
    return response.json();
  })
  .then((data) => {

    const user = data.user;
    const articles = data.articles;

    if (articles.length > 0) {

      const carritoElement = document.getElementById("Articulos");

      articles.forEach((producto) => {
        const productoHtml = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Costo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Moneda</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> <img width="50"src="${producto.image}" alt="Imagen del producto"> </th>
            <th> ${producto.name}</th>
            <th> ${producto.unitCost}</th>
            <th> <input type="text" id="cantidadInput_${producto.id}" value="${producto.count}" style="width: 50px; text-align: center"></th>
            <th> ${producto.currency}</th>
            <th> ${producto.unitCost * producto.count}</th>
          </tr>
        </tbody>
        </table>
          `;
        carritoElement.innerHTML += productoHtml;
      });

      console.log(articles);

    } else {
      console.error("El carrito de compras está vacío.");
    }
  })
  .catch((error) => {
    console.error(error);
  });

})

