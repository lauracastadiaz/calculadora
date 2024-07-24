//CAPTURAR LOS ELEMENTOS (DOM)
const botonNumeros= document.getElementsByName('dataNumber');

const botonOpera= document.getElementsByName('dataOpera');

const botonIgual= document.getElementsByName('dataIgual') [0];

const botonDelete= document.getElementsByName('dataDelete') [0];

var result= document.getElementById('result');

//variables que ayudan con la lógica de la app
var opeActual='';
var opeAnterior='';
var operacion=undefined;

//AGREGARLE LOS EVENTOS

botonNumeros.forEach(function(boton){ //recorre el array de los numeros y ejecuta una función que declaramos después

    boton.addEventListener('click', function(){ //al hacer click se ejecuta la siguiente función
        agregarNumero(boton.innerText);     
        /*  Cuando se hace clic en un botón, el evento se activa y se ejecuta la función 
        anónima asociada. Dentro de esa función, se accede al contenido del botón que fue clickeado 
        utilizando la propiedad innerText. Esta propiedad devuelve el texto que está dentro 
        del elemento HTML (en este caso, el número que representa el botón).
        */ 
       
    })
})

botonOpera.forEach(function(boton){
    
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText);
    
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

//IMPLEMENTAR LOS MÉTODOS

function agregarNumero(num){
    opeActual=opeActual.toString() + num.toString();
    actualizarDisplay();
}

function seleccionarOperacion(op){

    if(opeActual === '') 
    return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion=op.toString();
    opeAnterior=opeActual;
    opeActual='';
}

function calcular(){
    var calculo;
    const anterior= parseFloat(opeAnterior);
    const actual= parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) //Si alguno de los valores no es un número, la función sale temprano sin realizar ninguna operación y sin mostrar un resultado.
    return;
    switch(operacion){
        case '+':
            calculo=anterior+actual;
            break;
        case '-':
            calculo= anterior - actual;
            break;
        case 'x':
            calculo= anterior * actual;
            break;
        case '/':
            calculo= anterior / actual;
            break;
        case '%':
            calculo= anterior % actual;
            break;
        default:
            return;
    }

    opeActual= calculo;
    operacion=undefined;
    opeAnterior='';

    /*En resumen, esta función calcular() toma dos números globales, opeAnterior y opeActual, 
    realiza la operación aritmética indicada por la variable operacion, guarda el resultado en opeActual, 
    y luego se prepara para la siguiente operación con opeActual como el nuevo primer número y sin una operación pendiente.
    */
}


function clear(){
    opeActual='';
    opeAnterior='';
    operacion=undefined;
}

function actualizarDisplay(){
    result.value=opeActual;
}

clear();
