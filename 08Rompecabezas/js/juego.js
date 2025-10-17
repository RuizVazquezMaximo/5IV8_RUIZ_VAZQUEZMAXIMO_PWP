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

function intercambiaPosicion(filaPos1,columnaPos1,filaPos2, columnaPos2){
    var pos1 = rompe [filaPos1 , columnaPos1];
    var pos2 = rompe [filaPos2, columnaPos2];

    //intercambio

    rompe[filaPos1,columnaPos1];
    rompe[filaPos2,columnaPos2];

}