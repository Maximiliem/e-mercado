function openForm() {
    document.getElementById("container").style.display = "block";
  }

function closeForm() {
    document.getElementById("form-pop-up").style.display = "none";
  }

function myFunction() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function togglePopup() {

    document.getElementById("login-button")
   
     .classList.toggle("active");
   
 } 