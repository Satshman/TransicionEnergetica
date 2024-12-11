// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const formSection = document.getElementById("form-section");
    const formContent = document.getElementById("form-content");
    const authForm = document.getElementById("auth-form");

    // Manejar el botón de Login
    loginBtn.addEventListener("click", () => {
        formSection.classList.remove("hidden");
        formContent.innerHTML = `
            <h3>Iniciar Sesión</h3>
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        `;
        authForm.onsubmit = (e) => {
            e.preventDefault();
            alert("Inicio de sesión exitoso. Redirigiendo a consultas...");
            window.location.href = "C:/Transición Energética Justa/consultas.html"; // Ajusta el enlace a tu página de consultas
        };
    });

    // Manejar el botón de Registrar
    registerBtn.addEventListener("click", () => {
        formSection.classList.remove("hidden");
        formContent.innerHTML = `
            <h3>Registrar Usuario</h3>
            <label for="new-username">Usuario:</label>
            <input type="text" id="new-username" name="username" required>
            <label for="new-password">Contraseña:</label>
            <input type="password" id="new-password" name="password" required>
        `;
        authForm.onsubmit = (e) => {
            e.preventDefault();
            // Simular registro exitoso
            alert("Usuario registrado exitosamente.");
            formSection.classList.add("hidden");
        };
    });
});
