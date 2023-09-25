document.addEventListener("DOMContentLoaded", function(){
    const getList = document.getElementById("login-nav");

    function putContentOnList (){
        const listElements = `
        <div class="center-login-box">

    <input type="checkbox" class="login-button-ckbox" id="show">
        <label id="longinbuttonlabel" for="show" class="login-button">Iniciar sesión</label>

        <div class="container-popup">
            <label for="show" class="close-btn" title="close">X</label>
            <div class="text">Iniciar sesión</div>
            <form action="#">
                <div class="data-login">
                    <label>Email</label>
                    <input id="useremail" type="text" placeholder="Escriba aqui su email" required>
                </div>
                <div class="data-login">
                    <label>Contraseña</label>
                    <input id="userpassword" type="password" placeholder="Escriba aqui su contraseña" required>
                </div>
                <div class="forgot-pass">
                    <a href="#">Olvidé mi contraseña</a>
                </div>
                <div class="btn-login">
                    <div class="inner-login">
                        <button id="loginbutton" type="submit">Entrar</button>
                    </div>
                </div>
                <div class="signup-link-login">
                    ¿No tienes usuario? <a href="login.html" target="_blank">Crea tu cuenta</a>
                </div>
            </form>
        </div>
</div>
        `

        getList.innerHTML = listElements;
    };

    putContentOnList();
})