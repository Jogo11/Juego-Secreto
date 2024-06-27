let numeroSecreto = 0 ;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento':'intentos'}`);
        // activamos el boton nuevo juego cuando el usuario acierte
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto)
            {asignarTextoElemento('p','el numero es menor');}
        else{
            asignarTextoElemento('p','el numero es mayor ');}
    }
    intentos ++;
    limpiarcaja()
    return;
}

function condicionesDeInicio(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    // limpiar caja
    limpiarcaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio 
    // inicializar el numero de intentos
    condicionesDeInicio();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // cambiamos el return por una variable es decir el numero queda en una variable llamada numero generado
    // si el numero esta en la lista hacemos 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo ){
        asignarTextoElemento('p','Ya se sorteron todos los numeros posibles')
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

condicionesDeInicio();
