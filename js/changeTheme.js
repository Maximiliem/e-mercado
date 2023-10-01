document.addEventListener("DOMContentLoaded", function(){
    // Función para activar el modo oscuro

const darkMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#changeTheme i").setAttribute("class", "bi bi-sun");
    document.querySelector(".jumbotron").style.backgroundImage = "url('../img/cover_back_black.png')";
    localStorage.setItem("theme", "dark");
}

// Función para activar el modo claro
const lightMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#changeTheme i").setAttribute("class", "bi bi-moon");
    document.querySelector(".jumbotron").style.backgroundImage = "url('../img/cover_back.png')";
    localStorage.setItem("theme", "light");
}

// Función para cambiar entre modos
const changeMode = () => {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        darkMode();
    } else {
        lightMode();
    }
}

// Evento al hacer clic en el botón de cambio de tema
const buttonTheme = document.getElementById("changeTheme");
buttonTheme.addEventListener("click", () => {
    changeMode();
});

// Verificar si hay un tema almacenado en el localStorage y aplicarlo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    darkMode();
} else {
    lightMode();
}
});