// array con los juegos disponibles - Cada juego tiene nombre y  precio
var juegosDisponibles = [
  { nombre: "FIFA 23", precio: 60 },
  { nombre: "God of War", precio: 70 },
  { nombre: "Minecraft", precio: 30 },
  { nombre: "Call of Duty", precio: 65 },
  { nombre: "Mario Kart", precio: 50 },
];

// Variable para guardar el carrito de compras
var carritoCompras = [];

// Función principal para iniciar el simulador
function iniciarSimulador() {
  //  mensaje de bienvenida
  var nombreUsuario = prompt(
    "Bienvenido a la tienda de videojuegos. ¿Cuál es tu nombre?"
  );

  // Verificamos si el usuario ingresó un nombre
  if (nombreUsuario === null || nombreUsuario === "") {
    alert("Necesitas ingresar un nombre para continuar.");
    return; // Termina la función si no un hay nombre
  }

  // Saludo personalizado
  alert(
    "¡Hola " +
      nombreUsuario +
      "! Vamos a ayudarte con tu compra de videojuegos."
  );

  // Preguntamos si quiere ver los juegos disponibles
  var quiereVerJuegos = confirm("¿Deseas ver la lista de juegos disponibles?");

  // Si quiere ver los juegos, los mostramos
  if (quiereVerJuegos) {
    mostrarJuegosDisponibles();
  }

  // Inicia proceso de compra
  procesarCompra(nombreUsuario);
}

// Función para mostrar los juegos disponibles
function mostrarJuegosDisponibles() {
  var listaJuegos = "Juegos disponibles:\n\n";

  // ciclo for para recorrer el array de juegos
  for (var i = 0; i < juegosDisponibles.length; i++) {
    listaJuegos +=
      i +
      1 +
      ". " +
      juegosDisponibles[i].nombre +
      " - $" +
      juegosDisponibles[i].precio +
      "\n";
  }

  // Mostrar la lista completa
  alert(listaJuegos);
}

// Función para procesar la compra
function procesarCompra(nombreUsuario) {
  var seguirComprando = true;

  // Ciclo while para  múltiples compras
  while (seguirComprando) {
    // Mostrar los juegos
    var listaJuegos = "Selecciona un juego (ingresa el número):\n\n";
    for (var i = 0; i < juegosDisponibles.length; i++) {
      listaJuegos +=
        i +
        1 +
        ". " +
        juegosDisponibles[i].nombre +
        " - $" +
        juegosDisponibles[i].precio +
        "\n";
    }

    // Pedimos al usuario que seleccione el juego que quiere comprar
    var seleccion = prompt(listaJuegos);

    // Convertimos la selección a un número
    var numeroSeleccion = parseInt(seleccion);

    // Verificamos si la selección es válida
    if (numeroSeleccion >= 1 && numeroSeleccion <= juegosDisponibles.length) {
      // Agregamos el juego seleccionado al carrito
      var juegoSeleccionado = juegosDisponibles[numeroSeleccion - 1];
      carritoCompras.push(juegoSeleccionado);

      alert("¡Agregaste " + juegoSeleccionado.nombre + " a tu carrito!");
    } else {
      alert("Selección no válida. Por favor intenta de nuevo.");
    }

    // Preguntar:  quiere seguir comprando?
    seguirComprando = confirm("¿Deseas agregar otro juego al carrito?");
  }

  //  calculamos el total
  calcularTotal(nombreUsuario);
}

// Función para calcular el total de la compra
function calcularTotal(nombreUsuario) {
  // Si no hay juegos en el carrito, mostrar  mensaje
  if (carritoCompras.length === 0) {
    alert("No has agregado ningún juego al carrito.");
    return;
  }

  // Calcular  subtotal sumando los precios de todos los juegos
  var subtotal = 0;
  var resumenCompra = "Resumen de tu compra:\n\n";

  for (var i = 0; i < carritoCompras.length; i++) {
    subtotal += carritoCompras[i].precio;
    resumenCompra +=
      "- " +
      carritoCompras[i].nombre +
      " - $" +
      carritoCompras[i].precio +
      "\n";
  }

  // Aplicamos descuento según la cantidad de juegos
  var descuento = 0;

  // Usamos condicionales para determinar el descuento
  if (carritoCompras.length >= 3) {
    descuento = 0.2; // 20% de descuento si compra 3 o más juegos
  } else if (carritoCompras.length === 2) {
    descuento = 0.1; // 10% de descuento si compra 2 juegos
  }

  // Calculamos el descuento y el total
  var montoDescuento = subtotal * descuento;
  var total = subtotal - montoDescuento;

  // Completamos el resumen con los totales
  resumenCompra += "\nSubtotal: $" + subtotal.toFixed(2);
  resumenCompra += "\nCantidad de juegos: " + carritoCompras.length;

  if (descuento > 0) {
    resumenCompra += "\nDescuento aplicado: " + descuento * 100 + "%";
    resumenCompra += "\nMonto de descuento: $" + montoDescuento.toFixed(2);
  } else {
    resumenCompra += "\nNo se aplicaron descuentos.";
  }

  resumenCompra += "\nTotal a pagar: $" + total.toFixed(2);

  // Mostramos el resumen de la compra
  alert(resumenCompra);

  //  mostramos en la consola para referencia
  console.log("===== RESUMEN DE COMPRA =====");
  console.log("Cliente: " + nombreUsuario);
  console.log(resumenCompra);

  // Mensaje de agradecimiento
  alert("¡Gracias por tu compra, " + nombreUsuario + "! Vuelve pronto.");
}

// Conectamos el botón con la función de inicio
document
  .getElementById("iniciarBtn")
  .addEventListener("click", iniciarSimulador);

// Mensaje inicial en la consola
console.log("Simulador de Tienda de Videojuegos cargado correctamente.");
