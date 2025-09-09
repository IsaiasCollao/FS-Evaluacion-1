document.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.getElementById('status');

    const user = JSON.parse(localStorage.getItem('User'));
    if (user) {
        statusDiv.textContent = `Bienvenido, ${user.username}!`;
    } else {
        statusDiv.innerHTML = 'No has iniciado sesión. <a id="login-link" href="login.html">Iniciar Sesión</a> o <a id="register-link" href="registro.html">Registrarse</a>';
    }
});
