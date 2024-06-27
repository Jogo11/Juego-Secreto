function frase()
{console.log("Hola,Mundo");}

frase();


function saludar(nombre) 
 {return console.log(`Hola ${nombre}`);}

saludar('Joan');

function obtenerNumero(numero)
{return console.log(2*numero);}

obtenerNumero(4);

function obtenerPromedio (num_1,num_2,num_3)
{   console.log(typeof num_1);
    console.log(typeof num_2);
    console.log(typeof num_3);
    return console.log((num_1+num_2+num_3)/3)}

obtenerPromedio(2,4,6)  

function numeroMayor (numero1,numero2)
{if (numero1 > numero2) 
    {console.log(`El numero mayor es ${numero1}`);}
    else{console.log(`El numero mayor es ${numero2}`);}
}

numeroMayor(94,58);

function multiplica (num)
{return console.log(num * num)}

multiplica(3);

function peso (kg) 
{return kg}

function altura (cm)
{return cm }

let resultado = peso(65) / altura (1.75)**2
console.log(resultado);


function factorial (number)
{    return number <= 1 ? 1 : number * factorial(number - 1);

}

console.log(factorial(5));


function dolares( valor ){
    return `${valor} dolares son ${valor * 4.80} Reales`;
}

console.log(dolares(20));   

// arrays 

let listaGerencia = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push( 'Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

let reverso = lenguajesDeProgramacion.reverse();
console.log(reverso);