//la variable va tomando el valor de la ultima asignacion tipado dinamico, la variable no queda casada con ningun tipo de dato
'use strict' // eso se usa para solo usar variables que esten declaradas
var variable ='Paola Gonzalez Gallegos'; //se pueden usar las "" comillas sobles o las '' simple y las ´´ backticks
//la concatenacion ya no es bien vista porque podrian ponernos algun tipo de query 
console.log(variable);
console.log(`El nombre del usuario es : ${variable} ♥`); // no concatenar mejor usar las backticks
console.log(typeof variable);
variable =100;
console.log(variable);
variable =true;
console.log(variable);

//en este caso la variable es un objeto
variable={
    "nombre": "Paola",
    "Ciudad": "Morelia",
    "Edad" : 27,
    "Alive" : true
}
console.log(variable);
console.log(typeof variable);
console.log(variable.Edad);
//en javascript una funcion es tambien un tipo de dato, las variables 
//pueden ser una funcion
variable = function(a,b)
{
    if (a>b)
    {
        console.log("el numero mayor es " +a);
    }
    else
    {
        console.log("el numero mayor es " +b);
    }
};

variable = function(a,b)
{
    if (a>b)
        return a;
    else
        return b;
    
};
//console.log(variable);

console.log(variable(8,2));
console.log(typeof variable);
var r = variable(8,2);
console.log(r);

variable = new Date();
console.log(variable);
console.log(typeof variable);
//auqnue hay flexibilidad con el tipo siempre hay que definir la variable decirle que existe hay un comando para el uso estricto de variables.
//prueba=12; //mientras al inicio del archivo este la directiva 'use estrict' va a darte un error con esa variable llamada prueba. si lo quito no habra problema
//console.log(prueba);

let dato1=100;
let dato2=200;
let dato3=50;
//por lo tanto es mas eficioente poner el && y el || (esas rayas de llaman pipeline)
if(dato2> dato1 && dato2>dato3) //el doble && ya no evalua la segunda expresion si ya dio un false, el & solito haria la comparacion aun si da false el primer miembro mismo caso paa el OR |
    console.log("se cumple la condicion");