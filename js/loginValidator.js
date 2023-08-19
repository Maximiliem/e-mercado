document.addEventListener('DOMContentLoaded', () => {

    // Función  el  inicio de sesión
    function login() {
        // Obtiene los valores del correo electrónico y la contraseña
        const userEmail = document.getElementById("useremail").value;
        const userPassword = document.getElementById("userpassword").value;

        // Verificar si el correo electrónico y la contraseña no están vacíos aca incluir las validaciones de del registro
        if (userEmail !== "" && userPassword !== "") {
            // Almacena el estado de inicio de sesión en el almacenamiento local
            localStorage.setItem("logueado", "true");
            const userlogueado = localStorage.getItem("logueado");

            // Actualiza la etiqueta del botón de inicio de sesión para que muestre cerrar sesion
            const longinbuttonlabel = document.getElementById("longinbuttonlabel");
            longinbuttonlabel.textContent = "Cerrar sesión";

            // Oculta el formulario de iniciar sesion
            const containerPopup = document.querySelector('.container-popup');
            containerPopup.style.display = 'none';
        }
    }
    // Función para el cierre de sesión
    function logout() {
        // Elimina el estado de inicio de sesión del almacenamiento local
        localStorage.removeItem("logueado");

        // Actualiza la etiqueta del botón por inicio de sesión
        const longinbuttonlabel = document.getElementById("longinbuttonlabel");
        longinbuttonlabel.textContent = "Iniciar sesión";

        // Muestra nuevamente el formulario de inicio de sesion
        const containerPopup = document.querySelector('.container-popup');
        containerPopup.style.display = 'block';

    }

    // Agregar evento click al botón loginbutton
    const loginbutton = document.getElementById("loginbutton");
    if (loginbutton) {
        loginbutton.addEventListener('click', () => {
            // Verifica si el usuario ya está logueado
            if (localStorage.getItem("logueado")) {
                // Realiza el proceso de cierre de sesión
                logout();
            } else {
                login();
            }
        });
    }

    // Agregar evento click al botón longinbuttonlabel (que ahora dice "Cerrar sesión")
    const longinbuttonlabel = document.getElementById("longinbuttonlabel");
    if (longinbuttonlabel) {
        longinbuttonlabel.addEventListener('click', () => {
            // Realiza el proceso de cierre de sesión al hacer clic en "Cerrar sesión"
            logout();
        });
    }
});
