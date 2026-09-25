document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensaje de Bienvenida al hacer Login
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email-input');

    loginBtn.addEventListener('click', () => {
        const emailValue = emailInput.value.trim();
        if (emailValue !== '') {
            alert(`Bienvenido\n${emailValue}`);
        } else {
            alert('Por favor ingresa un correo electrónico.');
        }
    });