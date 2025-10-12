
// Validaciones de entrada
function validarNumerosConPuntoEspacio(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[0-9\d .]/;
    var caracter = String.fromCharCode(tecla);
    return patron.test(caracter);
}

function validarLetrasEspacios(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[a-zA-Z\s]/;
    var caracter = String.fromCharCode(tecla);
    return patron.test(caracter);
}

function validarNumerosSinDecimales(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[0-9]/;
    var caracter = String.fromCharCode(tecla);
    return patron.test(caracter);
}

// Ejercicio 1: Cálculo de interés
function calcularInteresMensual() {
    var cantidad = parseFloat(document.getElementById("cantidadi").value);
    var meses = parseFloat(document.getElementById("mesesi").value);
    var interes = cantidad * 0.085 * meses;
    var total = cantidad + interes;
    document.getElementById("saldoi").value = "$ " + total.toFixed(2);
}

// Ejercicio 2: Sueldo con comisiones
function calcularSueldoConComisiones() {
    var venta1 = parseFloat(document.getElementById("ventai1").value);
    var venta2 = parseFloat(document.getElementById("ventai2").value);
    var venta3 = parseFloat(document.getElementById("ventai3").value);
    var totalVentas = venta1 + venta2 + venta3;
    var comision = totalVentas * 0.10;
    var sueldoFinal = totalVentas + comision;
    document.getElementById("sueldoi").value = "$ " + sueldoFinal.toFixed(2);
}

// Ejercicio 3: Precio con descuento
function calcularPrecioConDescuento() {
    var nombreProducto = document.getElementById("productoi").value;
    var precioOriginal = parseFloat(document.getElementById("precioi").value);
    var descuento = precioOriginal * 0.15;
    var precioFinal = precioOriginal + descuento;
    document.getElementById("totali").value = "Producto: " + nombreProducto + "  $ " + precioFinal.toFixed(2);
}

// Ejercicio 4: Calificación final
function calcularCalificacionFinal() {
    var p1 = parseFloat(document.getElementById("p1i").value);
    var p2 = parseFloat(document.getElementById("p2i").value);
    var p3 = parseFloat(document.getElementById("p3i").value);
    var trabajoFinal = parseFloat(document.getElementById("tfi").value);
    var examen = parseFloat(document.getElementById("exi").value);

    var promedioParciales = (p1 + p2 + p3) / 3;
    var calificacionFinal = (promedioParciales * 0.55) + (trabajoFinal * 0.30) + (examen * 0.15);
    document.getElementById("cfi").value = calificacionFinal.toFixed(2);
}

// Ejercicio 5: Porcentaje de género
function calcularPorcentajeGenero() {
    var hombres = parseFloat(document.getElementById("hi").value);
    var mujeres = parseFloat(document.getElementById("mi").value);
    var total = hombres + mujeres;

    var porcentajeHombres = (hombres / total) * 100;
    var porcentajeMujeres = (mujeres / total) * 100;

    document.getElementById("porcentaje1i").value = porcentajeHombres.toFixed(2) + "%";
    document.getElementById("porcentaje2i").value = porcentajeMujeres.toFixed(2) + "%";
}
function calcularEdadDesdeFecha() {
    const fechaInput = document.getElementById("fechai").value;
    const fechaNacimiento = new Date(fechaInput);
    const fechaActual = new Date();

    const añoNacimiento = fechaNacimiento.getUTCFullYear();
    const mesNacimiento = fechaNacimiento.getUTCMonth() + 1;
    const diaNacimiento = fechaNacimiento.getUTCDate();

    const añoActual = fechaActual.getUTCFullYear();
    const mesActual = fechaActual.getUTCMonth() + 1;
    const diaActual = fechaActual.getUTCDate();

    let edad = añoActual - añoNacimiento;

    // Validación de edad máxima
    if (edad >= 122) {
        alert("Ingrese una edad inferior a 122 años");
        return;
    }

    // Validación de fecha futura
    if (fechaNacimiento > fechaActual) {
        alert("Ingrese una fecha pasada, no futura");
        return;
    }

    // Ajuste si aún no ha cumplido años este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    } }
    // Mostrar resultado
    document.getElementById("edadi").value = edad + " años";
// Cálculo de edad
function calcularEdadDesdeFecha() {
    const fechaNacimiento = new Date(document.getElementById("fechai").value);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad >= 0 && edad < 122) {
        document.getElementById("edadi").innerHTML = edad + " años";
    } else {
        alert("Edad no válida. Ingrese una fecha realista.");
    }
}

// Limpieza de formularios
function limpiarCampos() {
    const ids = [
        "saldoi", "cantidadi", "sueldoi", "ventai1", "ventai2", "ventai3",
        "productoi", "precioi", "p1i", "p2i", "p3i", "tfi", "exi", "cfi",
        "hi", "mi", "porcentaje1i", "porcentaje2i", "totali"
    ];
    ids.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) campo.value = "";
    });
}


/*
Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses


2 se deben de ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma ttoal

3 se debe de ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, precio, descuento, total a pagar

4 se debe de ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe de mostrar el total de calificacion

5 se debe de ingresar cantidad h y cantidad de mujeres y mostrar sus % correspondientes

6 calcular la edad de una persona
*/