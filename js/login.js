document.addEventListener('DOMContentLoaded', function (){ 


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
     } 
   
   function showAlertError() {
       document.getElementById("alert-danger").classList.add("show");
   }
   
   
   /*const form = document.querySelector("form-label");
   Comenté esta constante porque no hago uso de la misma*/
   const nombre = document.getElementById("nombre");
   const apellido = document.getElementById("apellido");
   const email = document.getElementById("email");
   const password1 = document.getElementById("password1");
   const password2 = document.getElementById("password2");
   
   /*const button = document.getElementById('regBtn');
   Comenté esta constante porque no lo estamos utilizando, en este caso estamos
   poniéndole el evento submit al formulario */
   
   const formula = document.getElementById('formulario');
   /*const para = document.querySelector("alert-danger");   
   Esta constante también está comentada porque no hago uso de la misma*/
   
   formula.addEventListener("submit", (event) => {  
   
   event.preventDefault();
   
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/;
    
   /*Se agregó el método .trim() para eliminar los espacios en blanco.
   Utilizo regex para permitir el uso de diferentes símbolos en la contraseña*/
     if (nombre.value.trim() === "" || 
     apellido.value.trim() === "" || 
     email.value.trim() === "" || 
     !regex.test(password1.value.trim()) || 
     !regex.test(password2.value.trim()) || 
     !terminos.checked || 
     password1.value !== password2.value || 
     password1.value.length < 6) {
        
        showAlertError();
        
     } else {
   
   /*Se añadió formula.reset() para reiniciar los campos del formulario*/
   
       formula.reset();
       showAlertSuccess();
     } 
   
   
   })
   
    });
   
   /*Ejemplo de algunas contraseñas que cumplen con los requisitos:
   
   A123456.or%
   
   P123@.wo
   
   Abc123$
   
   Pa$$w0rd
   
   MyP@ss123
   
   Secur3P@ss
   
   */

   function togglePopup() {

    document.getElementById("login-button")
   
     .classList.toggle("active");
   
  } 