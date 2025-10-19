// Ejercicio 1
function ejercicio1() {
  const n1 = parseFloat(document.getElementById("e1-n1").value);
  const n2 = parseFloat(document.getElementById("e1-n2").value);
  let resultado;

  if (n1 === n2) {
    resultado = n1 * n2;
  } else if (n1 > n2) {
    resultado = n1 - n2;
  } else {
    resultado = n1 + n2;
  }

  document.getElementById("e1-res").textContent = "Resultado: " + resultado;
}

// Ejercicio 2
function ejercicio2() {
  const n1 = parseFloat(document.getElementById("e2-n1").value);
  const n2 = parseFloat(document.getElementById("e2-n2").value);
  const n3 = parseFloat(document.getElementById("e2-n3").value);

  const mayor = Math.max(n1, n2, n3);
  document.getElementById("e2-res").textContent = "El número mayor es: " + mayor;
}

// Ejercicio 3
function ejercicio3() {
  const horas = parseFloat(document.getElementById("e3-horas").value);
  const pagoHora = parseFloat(document.getElementById("e3-sueldo").value);
  let total = 0;

  if (horas <= 40) {
    total = horas * pagoHora;
  } else {
    const extras = horas - 40;
    if (extras <= 8) {
      total = (40 * pagoHora) + (extras * pagoHora * 2);
    } else {
      total = (40 * pagoHora) + (8 * pagoHora * 2) + ((extras - 8) * pagoHora * 3);
    }
  }

  document.getElementById("e3-res").textContent = "Total a pagar: $" + total.toFixed(2);
}

// Ejercicio 4
function ejercicio4() {
  const sueldo = parseFloat(document.getElementById("e4-sueldo").value);
  const años = parseFloat(document.getElementById("e4-antiguedad").value);
  let porcentaje = 0;

  if (años < 1) porcentaje = 0.05;
  else if (años < 2) porcentaje = 0.07;
  else if (años < 5) porcentaje = 0.10;
  else if (años < 10) porcentaje = 0.15;
  else porcentaje = 0.20;

  const utilidad = sueldo * porcentaje;
  document.getElementById("e4-res").textContent = "Utilidad anual: $" + utilidad.toFixed(2);
}
