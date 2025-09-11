document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registro-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validaciones básicas
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
const users = JSON.parse(localStorage.getItem('users')) || [];
if (users.find(u => u.username === username)) {
    alert('El nombre de usuario ya está en uso.');
    return;
}
//
users.push({ username, email, password });
localStorage.setItem('users', JSON.stringify(users));
alert('Registro exitoso. Ahora puedes iniciar sesión.');
form.reset(); // Limpia el formulario después del registro exitoso
window.location.href = 'login.html'; // Redirige a la página de login
    });
});
    