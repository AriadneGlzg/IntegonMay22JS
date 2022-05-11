let numeros = [8, 9, 12,45];
let condiciones=[true, false,true,false,false];
numeros.push(84);
console.log(numeros); //se empiezan a numerar a partir del 0
console.log(numeros[0]);
console.log(numeros.length);
console.log(numeros.findIndex(n=> n==12));
console.log("for tradicional: ");
for (index=0; index<numeros.length;index++){
    console.log(numeros[index]);
}

console.log("foreach: ");
numeros.forEach(function(num){ //la funcion es lo que determina lo que va a pasar con el item en cada vuelta
    console.log(num);
});

console.log("foreach con bool: ");
condiciones.forEach(function(bandera){ //la funcion es lo que determina lo que va a pasar con el item en cada vuelta
    console.log(bandera);
});

let personas=[];

personas.push({ //eso es un objeto, lo que esta adrento de las llaves es un objeto, solos objetos siempre van entre llaves
    "nombre": "Paola",
    "edad" : 27,
    "premium" : true
});
personas.push({
    "nombre": "Steven",
    "edad" : 30,
    "premium" : false
});

personas.push({  //los arreglos pueden ser multitipo, puede haber distintos objetos, pero igual no suele hacerse eso, deberiamos hacer validaciones
    "base": 45.12,
    "altura":10.5 
});
condiciones.forEach(function(bandera){ //la funcion es lo que determina lo que va a pasar con el item en cada vuelta
    console.log(bandera);
});

personas.forEach(function(persona){
    console.log(persona);
});