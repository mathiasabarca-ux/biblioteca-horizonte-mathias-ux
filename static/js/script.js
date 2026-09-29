document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensaje de bienvenida al ingresar
    const loginBtn = document.getElementById('btn-ingresar');
    const emailInput = document.getElementById('email-input');

    if (loginBtn && emailInput) {
        loginBtn.addEventListener('click', () => {
            const emailValue = emailInput.value.trim();
            if (emailValue !== '') {
                alert(`Bienvenido\n${emailValue}`);
            } else {
                alert('Por favor ingresa un correo electrónico.');
            }
        });
    }

    // 2. Contador de libros seleccionados
    const contadorLibros = document.getElementById('contador-libros');
    const botonesAgregar = document.querySelectorAll('.btn-agregar-libro');
    let totalLibros = 0;

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', () => {
            totalLibros++;
            if (contadorLibros) {
                contadorLibros.textContent = totalLibros;
            }
        });
    });

    // 3. Transición de Imagen a Video al pasar el cursor
    const imagenPrincipal = document.getElementById('imagen-principal');
    const videoHover = document.getElementById('video-hover');
    const contenedorMultimedia = document.querySelector('.multimedia-principal');

    if (imagenPrincipal && videoHover && contenedorMultimedia) {
        contenedorMultimedia.addEventListener('mouseenter', () => {
            imagenPrincipal.style.display = 'none';
            videoHover.style.display = 'block';
            videoHover.play().catch(error => {
                console.log('Error al intentar reproducir el video:', error);
            });
        });

        contenedorMultimedia.addEventListener('mouseleave', () => {
            videoHover.pause();
            videoHover.currentTime = 0; // Reinicia el video al segundo 0
            videoHover.style.display = 'none';
            imagenPrincipal.style.display = 'block';
        });
    }

});