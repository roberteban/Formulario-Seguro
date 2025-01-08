// Selección de elementos del DOM
const enviar = document.getElementById('boton');
const usuario = document.getElementById('nombre');
const password = document.getElementById('password');
const mensajeError = document.getElementById('mensaje-error');

// Inicializar validaciones
document.addEventListener('DOMContentLoaded', () => {
    enviar.disabled = true;
    usuario.addEventListener('input', validacion);
    password.addEventListener('input', validacion);
});

// Validación de campos
function validacion() {
    mensajeError.textContent = ''; // Limpiar mensajes de error previos
    const nombreValido = usuario.value.trim().length >= 3 && /^[a-zA-Z\s]+$/.test(usuario.value);
    const passwordValida = password.value.trim().length >= 8;

    if (!nombreValido) {
        mensajeError.textContent = 'El nombre debe tener al menos 3 caracteres y solo puede contener letras.';
    }

    if (!passwordValida) {
        mensajeError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    }

    // Habilitar o deshabilitar el botón
    enviar.disabled = !(nombreValido && passwordValida);
}
