document.addEventListener("DOMContentLoaded", () => {
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
        const tableBody = carritoElement.querySelector('tbody');

        articles.forEach((producto) => {
          const row = document.createElement('tr');

          row.innerHTML = `
            <th scope="row"><img width="50" src="${producto.image}" alt="Imagen del producto"></th>
            <td>${producto.name}</td>
            <td>${producto.unitCost}</td>
            <td><input type="text" id="cantidadInput_${producto.id}" value="${producto.count}" style="width: 50px; text-align: center"></td>
            <td>${producto.currency}</td>
            <td>${producto.unitCost}</td>
          `;

        

          tableBody.appendChild(row);
        });

        console.log(articles);

        // Max add: contenido respectivo para hacer los controles gráficos de envío y dirección
    function addGraphicsControls(){
        const anotherRow = document.createElement('div');
        anotherRow.innerHTML = `
        <br>
        <!--FORMULARIO DE SELECCIÓN DE TIPO DE ENVÍO-->
        <div class="form-container">    
            <h3>Tipo de envío</h3>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Premium 2 a 5 días (15%)
                    </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Express 5 a 8 días (7%)
                    </label>
            </div>
            
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                    <label class="form-check-label" for="flexRadioDefault3">
                        Standard 12 a 15 días (5%)
                    </label>
            </div>
        </div>

        <br>
        <!--INGRESO DE DATOS DE DIRECCIÓN, NÚMERO Y CALLE-->
        <div class="shippingAddress">
            <h3>Dirección de envío</h3>
            <label class="label-calle">Calle</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Street name input" aria-describedby="inputGroup-sizing-default">
            </div>

            <label class="label-numero">Número</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Street number input" aria-describedby="inputGroup-sizing-default">
            </div>

            <label class="label-esquina">Esquina</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Corner street name input" aria-describedby="inputGroup-sizing-default">
            </div>
        </div>

          `

          tableBody.appendChild(anotherRow);
    };
    addGraphicsControls();

      } else {
        console.error("El carrito de compras está vacío.");
      }
    })
    .catch((error) => {
      console.error(error);
    });

})
