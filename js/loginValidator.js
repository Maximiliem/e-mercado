document.addEventListener('DOMContentLoaded',() => {

    function login(event){
        //event.preventDefault();
        const userEmail = document.getElementById("useremail").value;
        const userPassword = document.getElementById("userpassword").value;
        const loginbutton = document.getElementById("loginbutton");
        const longinbuttonlabel = document.getElementById("longinbuttonlabel")

        loginbutton.addEventListener('click', () =>{
            if(userEmail !== "" && userPassword !=="" ){
                localStorage.setItem("logueado","true");
                const userlogueado = localStorage.getItem("logueado");
                longinbuttonlabel.textContent = "Cerrar sesión";
                const containerPopup = document.querySelector('.container-popup');
                containerPopup.innerHTML='';
                containerPopup.style.display = 'none';
            }
        })

    }

    function logout(){

        localStorage.removeItem("logueado");

    }

    // Agregar evento click al botón loginbutton
    const loginbutton = document.getElementById("loginbutton");
    if (loginbutton) {
        loginbutton.addEventListener('click', () => {
            login();
        });
    }



})