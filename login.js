document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Inicio de sesión exitoso.');
            localStorage.setItem('User', JSON.stringify({user}));
            window.location.href = 'index.html';
            // Aquí puedes redirigir a otra página o realizar otras acciones
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
        form.reset(); // Limpia el formulario después del intento de inicio de sesión
    });
});