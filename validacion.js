/* -- Validación Formulario -- */
window.onload = iniciar;

function iniciar() {
   document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre () {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert ("El campo nombre no puede estar vacío, debe contener un nombre.");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono () {
    var elemento = document.getElementById("telefono");
    if (isNaN (elemento.value)) {
        alert ("Este campo tiene que ser númerico");
        error(elemento);
        return false;
    }
    return true;
}

function validaCorreo () {
    var elemento = document.getElementById("correo");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert ("El campo debe contener un formato de email válido.");
        error(elemento);
        return false;
    }
    return true;
}

function validaMensaje () {
    var elemento = document.getElementById("mensaje");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert ("El campo debe contener un mensaje.");
        error(elemento);
        return false;
    }
    return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaCorreo() && validaMensaje() && confirm("Si querés enviar el formulario, pulsá aceptar.")) {
        return true;
    } else {
        e.preventDefault ();
        return false;
    }
}

function error(elemento) {
    elemento.className="error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}