document.addEventListener('DOMContentLoaded', () => {
    const elementoMostrarCorreo = document.createElement('span');
    elementoMostrarCorreo.id = "correoMensajeLogueado";

    function login() {
        // Obtiene los valores del correo electrónico y la contraseña
        const userEmail = document.getElementById("useremail").value;
        const userPassword = document.getElementById("userpassword").value;

        // Verificar si el correo electrónico y la contraseña no están vacíos
        if (userEmail !== "" && userPassword !== "") {
            // Almacena el estado de inicio de sesión en el almacenamiento local
            localStorage.setItem("logueado", "true");
            // Guardamos el correo ingresado con la clave "email"
            localStorage.setItem("email", userEmail);
            localStorage.setItem("password", userPassword);

            // Actualiza la etiqueta del botón de inicio de sesión para que muestre cerrar sesión
            const longinbuttonlabel = document.getElementById("longinbuttonlabel");
            longinbuttonlabel.textContent = "Cerrar sesión";

            // Oculta la etiqueta de crear cuenta
            const botonCrearCuenta = document.getElementById("botonCrearCuenta");
            const barranav = document.getElementById("navbarNav");
            // Ocultar el botón cambiando su estilo
            botonCrearCuenta.style.display = "none";

            // Oculta el formulario de iniciar sesión
            const containerPopup = document.querySelector('.container-popup');
            containerPopup.style.display = 'none';

            // Crear un elemento que muestre un saludo al usuario (Correo Loggeado)
            barranav.appendChild(elementoMostrarCorreo);
            // Modificamos la clase para mostrarlo y traemos el valor del local storage
            elementoMostrarCorreo.className = 'nav-link text-white';
            elementoMostrarCorreo.textContent = 'Bienvenido: ' + localStorage.getItem('email');
        }
    }

    function logout() {
        // Elimina el estado de inicio de sesión del almacenamiento local
        localStorage.removeItem("logueado");
        localStorage.removeItem("email");
        localStorage.removeItem("password");

        // Actualiza la etiqueta del botón por inicio de sesión
        const longinbuttonlabel = document.getElementById("longinbuttonlabel");
        longinbuttonlabel.textContent = "Iniciar sesión";

        // Muestra nuevamente el formulario de inicio de sesión
        const containerPopup = document.querySelector('.container-popup');
        containerPopup.style.display = 'block';

        // Muestra nuevamente el botón de crear usuario 
        const botonCrearCuenta = document.getElementById("botonCrearCuenta");

        // Ocultar el botón cambiando su estilo
        botonCrearCuenta.style.display = "block";

        // Ocultar el mensaje cambiando su estilo 
        const elementoMostrarCorreo = document.getElementById("correoMensajeLogueado");
        elementoMostrarCorreo.remove();
    }

    // Agregar evento click al botón loginbutton
    function logbtn() {
        const loginbutton = document.getElementById("loginbutton");
        if (loginbutton) {
            loginbutton.addEventListener('click', (event) => {
                event.preventDefault();
                // Verifica si el usuario ya está logueado
                if (localStorage.getItem("logueado")) {
                    // Realiza el proceso de cierre de sesión
                    logout();
                } else {
                    login();
                }
            });
        }
    }

    function endSession() {
        // Agregar evento click al botón longinbuttonlabel (que ahora dice "Cerrar sesión")
        const longinbuttonlabel = document.getElementById("longinbuttonlabel");
        if (longinbuttonlabel) {
            longinbuttonlabel.addEventListener('click', () => {
                // Realiza el proceso de cierre de sesión al hacer clic en "Cerrar sesión"
                logout();
            });
        }
    }

    // Verificar y actualizar la etiqueta del botón cuando la página carga
    // const userlogueado = localStorage.getItem("logueado");
    // updateButtonLabel(userlogueado === "true");

    // Agrega una comprobación para ver si hay login previo
    function Comprueba() {
        var user = document.getElementById("usuario").value;
        var pass = document.getElementById("password").value;
        $.post("conexion.php", { usuario: user, password: pass }, function (data) {
            if (data != "NO") {
                $("#mensaje").html("<span class='verde'>Bienvenido " + data + "</span>");
                sessionStorage.setItem('usuario', user);

                $("#Noticias").removeClass("disabled").addClass("active");
                $("#Rutas").removeClass("disabled").addClass("active");
                $("#Inscribirse").removeClass("disabled").addClass("active");
                $("#Listados").removeClass("disabled").addClass("active");

                limpiarFormulario();
                checkLoginPrev(); //llama a la funcion de verificar login
            } else {
                $("#mensaje").html("<span class='roja'>Usuario no válido</span>");
            }
        });
    }
    //funcion para verificar login previo
    function checkLoginPrev() {
        const prevLog = localStorage.getItem("logueado");

        if (prevLog === "true") { // El usuario está logueado, ejecutar keepLog para mantener login
            
            keepLog();
        }
    }
    //funcion para mantener login con datos de login previo
    function keepLog() {
        const longinbuttonlabel = document.getElementById("longinbuttonlabel");
        longinbuttonlabel.textContent = "Cerrar sesión";

        const botonCrearCuenta = document.getElementById("botonCrearCuenta");
        const barranav = document.getElementById("navbarNav");
        botonCrearCuenta.style.display = "none";

        const containerPopup = document.querySelector('.container-popup');
        containerPopup.style.display = 'none';

        barranav.appendChild(elementoMostrarCorreo);
        elementoMostrarCorreo.className = 'nav-link text-white';
        elementoMostrarCorreo.textContent = 'Bienvenido: ' + localStorage.getItem('email');
    }

    logbtn();
    endSession();
    checkLoginPrev();
});
