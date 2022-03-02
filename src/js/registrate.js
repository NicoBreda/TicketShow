//Eventos
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let provincia = document.getElementById("provincia");
let contraseña = document.getElementById("contraseña");
let boton = document.getElementById("btnPrincipal");

//validación de datos del formulario de registro

boton.addEventListener("click", eventoClick);

function eventoClick() {
    console.log("Evento Click");

    if (nombre.value == "" ) {
        var contenido = "<p class='text-white bg-danger p-3'>El campo nombre está vacío!</p>";
        document.getElementById("resultado").innerHTML = contenido;
        return false;
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
    if (email.value == "") {
        var contenido = "<p class='text-white bg-danger p-3'>El campo email está vacío!</p>";
        document.getElementById("resultado").innerHTML = contenido;
        return false;
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
    if (telefono.value == "") {
        var contenido = "<p class='text-white bg-danger p-3'>El campo teléfono está vacío!</p>";
        document.getElementById("resultado").innerHTML = contenido;
        return false;
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
    if (provincia.value == "") {
        var contenido = "<p class='text-white bg-danger p-3'>El campo provincia está vacío!</p>";
        document.getElementById("resultado").innerHTML = contenido;
        return false;
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
    if (contraseña.value == "") {
        var contenido = "<p class='text-white bg-danger p-3'>El campo contraseña está vacío!</p>";
        document.getElementById("resultado").innerHTML = contenido;
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
    
}

//Envío de datos una vez comprobado que no falta nada
//document.getElementById("form").onsubmit(); 

/*let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", validarFormulario);

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var provincia = document.getElementById("provincia").value;
    var contraseña = document.getElementById("contraseña").value;

    if (nombre == "") {
        alert("ingrese un nombre");
        return false;
    }
}*/