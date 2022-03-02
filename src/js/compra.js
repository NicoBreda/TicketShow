function datosCliente() {
    var cliente = document.getElementById("cliente").value;
    var correo = document.getElementById("correo").value;

    if (cliente == "" ) {
        var mensaje = "<p class='text-white bg-danger p-3'>Ingrese un nombre de cliente</p>";
        document.getElementById("datosCliente").innerHTML = mensaje;
        return false;
    }
    if (correo == "" ) {
        var mensaje = "<p class='text-white bg-danger p-3'>Ingrese un correo</p>";
        document.getElementById("datosCliente").innerHTML = mensaje;
        return false;
    }
}

