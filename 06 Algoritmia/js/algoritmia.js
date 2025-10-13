function invertirPalabras() {
    const input = document.getElementById("p1-input").value.trim();
    if (input === "") {
        document.getElementById("p1-output").textContent = "Por favor ingresa palabras.";
        return;
    }

    const palabras = input.split(" ");
    const invertidas = palabras.reverse().join(" ");
    document.getElementById("p1-output").textContent = invertidas;
}

function calcularMinimoProductoEscalar() {
    const x = [
        parseFloat(document.getElementById("p2-x1").value),
        parseFloat(document.getElementById("p2-x2").value),
        parseFloat(document.getElementById("p2-x3").value),
        parseFloat(document.getElementById("p2-x4").value),
        parseFloat(document.getElementById("p2-x5").value)
    ];

    const y = [
        parseFloat(document.getElementById("p2-y1").value),
        parseFloat(document.getElementById("p2-y2").value),
        parseFloat(document.getElementById("p2-y3").value),
        parseFloat(document.getElementById("p2-y4").value),
        parseFloat(document.getElementById("p2-y5").value)
    ];

    if (x.includes(NaN) || y.includes(NaN)) {
        document.getElementById("p2-output").textContent = "Completa todos los valores numéricos.";
        return;
    }

    const xOrdenado = x.sort((a, b) => a - b);
    const yOrdenado = y.sort((a, b) => b - a); // inverso para minimizar

    let producto = 0;
    for (let i = 0; i < x.length; i++) {
        producto += xOrdenado[i] * yOrdenado[i];
    }

    document.getElementById("p2-output").textContent = "Mínimo producto escalar: " + producto;
}

function calcularcu(){
    var abcOk = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","V","X","Y","Z","ñ"];
    var palabrasingresadas= document.getElementById("p3_input").value;
    var arreglopalabras = palabrasingresadas.split(",");
    var letra1 = "";
    var letra2 = "";
    var palabraaprobar = "";
    var contador = 0;
    var arreglocontadorcaracteresunicos = [];
    alert(arreglopalabras)
    if(palabrasingresadas.includes(" ")){
        alert("Por favor, no ingrese espacios")
    }else{
        for(var j=0;j<arreglopalabras.length;j++){
            palabraaprobar=arreglopalabras[j];
            for(var i=0;i<abcOk.length;i++){
            letra1=abcOk[i];
                for(var k=0; k<palabraaprobar.length; k++){
                letra2= palabraaprobar.charAt(k);
                if(letra1===letra2){
                    abcOk.splice(i,1);
                    contador= contador+1;
                }
                }   
            }
            var abcOk = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","V","X","Y","Z","ñ"];
            arreglocontadorcaracteresunicos.push(contador); 
            contador=0;
        }
        contador = Math.max(...arreglocontadorcaracteresunicos);
        contador = arreglocontadorcaracteresunicos.indexOf(contador);
        alert(contador)
        document.getElementById("p3_output").innerHTML = "La palabra que tiene mas caracteres unicos es: " + arreglopalabras[contador];
    }
}
function palabraConMasCaracteresUnicos() {
    const entrada = document.getElementById("p3-input").value.trim().toUpperCase();
    if (entrada === "") {
        document.getElementById("p3-output").textContent = "Por favor ingresa palabras separadas por coma.";
        return;
    }

    const palabras = entrada.split(",");
    let maxUnicos = 0;
    let palabraMax = "";

    for (let palabra of palabras) {
        const letras = palabra.split("").filter(l => /^[A-Z]$/.test(l));
        const conjunto = new Set(letras);
        if (conjunto.size > maxUnicos) {
            maxUnicos = conjunto.size;
            palabraMax = palabra;
        }
    }

    document.getElementById("p3-output").textContent = `Palabra con más caracteres únicos: ${palabraMax} (${maxUnicos})`;
}