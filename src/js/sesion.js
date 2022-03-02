class DatosInicioSesion {
    constructor(datos_inicioSesion) {
        this.email = datos_inicioSesion.email[0];
        this.contraseña = datos_inicioSesion.contraseña[1];
    }
}


//enviar y guardar los datos

function enviarDatos() {
    var email = document.getElementById("emailSesion").value;
    var contraseña = document.getElementById("contraseñaSesion").value;

    if (email == "" ) {
        var mensaje = "<p class='text-white bg-danger p-3'>Ingrese un email</p>";
        document.getElementById("resultadoSesion").innerHTML = mensaje;
        return false;
    }
    if (contraseña == "" ) {
        var mensaje = "<p class='text-white bg-danger p-3'>Ingrese su contraseña</p>";
        document.getElementById("resultadoSesion").innerHTML = mensaje;
        return false;
    }
    localStorage.setItem("datos_inicioSesion", JSON.stringify([email, contraseña]));
    document.getElementById("resultadoSesion").innerHTML = "<p class='text-white bg-black p-3'>Se ha iniciado sesión</p>";
}



//para cargar los datos

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_inicioSesion"));
    var datos_inicioSesion = new DatosInicioSesion(datos);

    console.log(datos);
    document.getElementById("emailSesion").value = datos_inicioSesion.email;
    document.getElementById("contraseñaSesion").value = datos_inicioSesion.contraseña;
    document.getElementById("resultadoSesion").innerHTML = "<p class='text-white bg-dark p-3'>Se cargaron los datos</p>";
}



function mostrarContrasena(){
    var tipo = document.getElementById("contraseñaSesion");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}


//evento click al boton enviar datos

document.getElementById("enviar_datos").addEventListener("click", enviarDatos);

//evento click al boton cargar datos

document.getElementById("cargar_datos").addEventListener("click", cargarDatos);