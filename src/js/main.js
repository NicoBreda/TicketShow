//entradas a la venta
const shows = [{id:1, nombre: "David Guilmour-campo", imagen: "Guilmour.png", precio: "5000"},
               {id:2, nombre: "U2-campo", imagen: "U2.png", precio: "4000"},
               {id:3, nombre: "Metronomy-campo", imagen: "Metronomy.png", precio: "3000"},
               {id:4, nombre: "David Guilmour-platea", imagen: "Guilmour.png", precio: "9000"},
               {id:5, nombre: "U2-platea", imagen: "U2.png", precio: "7000"},
               {id:6, nombre: "Metronomy-platea", imagen: "Metronomy.png", precio: "5000"}];

class Entrada {
    constructor(show) {
        this.nombre = show.nombre;
        this.imagen = show.imagen;
        this.precio = show.precio;
    }
    recargoPorServicio() {
        this.precio = this.precio * 1.10;
    }
}    

let contenido = "";
let boton = document.createElement("button");
boton.className = "btn btn-block btn-primary agregar-carrito text-center text-white bg-blue p-1"
boton.innerHTML = "COMPRAR"

for (let entrada of shows) {
    contenido += "<div class= 'col-md-4'>";
    contenido += "<div class='card' style='width: 18rem;'>";
    contenido += "<img src='src/multimedia/" + entrada.imagen + "'class='card-img-top' alt='" + entrada.nombre + "' >";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='card-title'>" + entrada.nombre + "</h5>";
    contenido += "<p class='card-text'>$" + entrada.precio + "</p>";
    contenido += boton = "<a href='file:///C:/Users/Nicolas/Desktop/CoderHouse/Java-Script/Clase-11/TicketShow/src/paginas/Compra.html' class='btn btn-primary'>COMPRAR</a>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";                     
}

let opciones_tickets = document.getElementById("shows");
opciones_tickets.innerHTML = contenido;


function guardarShowsLocal(shows) {
    localStorage.setItem("shows", JSON.stringify(shows));
    console.log("Los shows se guardaron satisfactoriamente");
}

function cargarShowsLocal() {
    console.log("Los modelos se cargaron satisfactoriamente");
    return JSON.parse(localStorage.getItem("shows"));
}

function buscarEntrada() {
let shows = cargarShowsLocal();
return shows.find(x => x.id == id);
}

function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return []
}

function agregarAlCarrito(id) {
let show = buscarEntrada(id);
let shows = cargarCarrito();
shows.push(show);
localStorage.setItem("carrito", JSON.stringify(shows));
localStorage.setItem("total-carrito" , shows.length);
actualizarCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total-carrito");
}

document.getElementById('eliminar-carrito').addEventListener("click", eliminarCarrito);

//let shows_cargados = cargarShows();*/

    /* opcion 2:
    console.log(entrada);
    const divEntrada = document.createElement('div');
    divEntrada.innerHTML = `
                            <h2> ${entrada.nombre} </h2>;
                            <img src="${entrada.imagen}">;
                            <p> ${entrada.precio} </p>;
                           `
opciones_tickets.append(divEntrada);}*/


    
 