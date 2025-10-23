var instrucciones = [
    "Utiliza las flechas de navegacion para mover las piezas, ",
    "Para ordenar las piezas guiate por la imagen Objetivo"
]

//Vamos a guardar dentro de una variable los movimientos del rompecabezas
var movimientos = [

]

//Vamos  crear una matriz para saber las posiciones del rompecabezas

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//vamos a tener que crear una matriz donde tengamos las posiciones correctas

var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//Necesito saber las coordenadas de la pieza vacia 

var filaVacia = 2;
var columnaVacia = 2;

//Necesitamos ahora si una funcion que se encargue de mostrar las instrucciones

function mostrarInstrucciones(instrucciones){
    for(var i=0; i<instrucciones.length; i++){
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
}

//esta funcion se encarga de crear el componente li y agregar la lista de dichas instrucciones

function mostrarInstruccionesLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//Mandamos traer a la funcion 
mostrarInstrucciones(instrucciones);

function iniciar(){
    //Mezclar las piezas 
    //Capturar el ultimo movimiento
}

function checarSigano(){
    for(var j = 0; 1 < rompe.length ; i++){
        for(var j = 0; j < rompe[i].length; j++){
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false
            }
        }
    }
    return true;
}

//mostrar si gano 
function mostrarGanador(){
    if(checarSigano()){
        alert("Ganaste GG")
    }
    return false;

}
/*
necesitamos un afuncion que intercambie la pocicion de la pieza vacio por otra pieza tenemos que hacer uso de :
arreglo [][]  = posicion[][] 
//intercambia 
posicion[][] = arregglo[][]
posicion[][] = arreglo[][]
*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var temp = rompe[filaPos1][columnaPos1];
    rompe[filaPos1][columnaPos1] = rompe[filaPos2][columnaPos2];
    rompe[filaPos2][columnaPos2] = temp;
}

//funcion para ver pieza vacia
function actualizarpiezavacia(nuevaFila,nuevaColumna){
    filaVacia= nuevaFila
    culumaVacia = nuevaColumna
}

function pocicionValida(fila,columa){
    return(fila>= 0 && fila <= 2 && columa >= 0 && columa <=2)
}
var codigodeDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40


}; //FORMATO JSON
//crear una funcion para detectar el evento de las flechas 
// debemos crear una matriz para los mov
//arriba 38 abajo 40 
function moverDireccion(Direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;
    // si se mueve
    if (Direccion === codigodeDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia +1;
        nuevaColumnaPiezaVacia = columnaVacia;
    } else if (Direccion=== codigodeDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia -1;
        nuevaColumnaPiezaVacia = columnaVacia;

    }else if (Direccion=== codigodeDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia ;
        nuevaColumnaPiezaVacia = columnaVacia +1 ;

    }else if (Direccion=== codigodeDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia -1 ;

    }
// solo mando a llamar a que la pocicion se a valida 
if( pocicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    //funcion intercambiar posiciones
    intercambiaPosicion(filaVacia,culumaVacia,nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia);
    actualizarpiezavacia(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia);

    agregarUltimoMovimiento(Direccion)

    function intercambiaPosicion(fila1,columna1,fila2, columna2){
        var pieza1 = rompe [filaP1 , columna1];
        var pieza2 = rompe [fila2, columnaP2];
    
        //intercambio ya es parte de los frames 
    intercambiaPosicionRompe(fila1,columna1,fila2,columna2)
    //Para html
    intercambiaPosicionDOM('pieza'+pieza1, 'pieza'+pieza2);
    
    }
}
}

function intercambiaPosicionDOM(idPieza1, idPieza2){
    var pieza1 = document.getElementById(idPieza1);
    var pieza1 = document.getElementById(idPieza2);

    var padre = elemntoPieza1.parentNode;

    var CloneElemento1 = elementoPieza1.cloneNode(true);
    var ClobeElemnto2 = elementoPieza2.cloneNode(true);

    padre.replaceClild(CloneElemento1,elementoPieza2);
    padre.replaceClild(CloneElemento2,elementoPieza1);

}

//actualizar movimientos DOM
function actualizarUltimoMovimiento(Direccion){
    var ultimoMovimiento = document.getElementById("flecha");
    switch(Direccion){
        case codigodeDireccion.ARRIBA:
            ultimoMovimiento.textContent= "↑";
            break;
            case codigodeDireccion.ABAJO:
            ultimoMovimiento.textContent= "↓";
            break;
            case codigodeDireccion.DERECHA:
            ultimoMovimiento.textContent= "→";
            break;
            case codigodeDireccion.IZQUIERDA:
            ultimoMovimiento.textContent= "←";
            break;
    }
}

//poder mezclar todar las piezas 

function mezclarPiezas(veces){
    if(veces <= 0){
        alert("no se puede");
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];
    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 50);
}


function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ARRIBA ||
                         evento.which === codigosDireccion.ABAJO ||
                         evento.which === codigosDireccion.DERECHA ||
                         evento.which === codigosDireccion.IZQUIERDA){
            moverEnDireccion(evento.which);
            //saber si gane
            var gano = checarSiGano();
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500);
            }
            evento.preventDefault();
        }
    });
}

function iniciar(){
    mezclarPiezas(30);
    capturaTeclas();

}

iniciar();

mostrarInstrucciones(instrucciones);