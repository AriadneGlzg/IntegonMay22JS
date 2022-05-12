type Ejemplo = [number, string, boolean];
let arregloEjemplo : Array<Ejemplo>=[];

let mensaje:string ="hola mundo ♥";
let dato: number =5;
let encendido: boolean = false;
console.log(mensaje);

let ejemplo1: Ejemplo, ejemplo2: Ejemplo, ejemplo3: Ejemplo;
ejemplo1 = [10,"cadena1",true];
ejemplo2 = [20,"cadena2",false];
ejemplo3 = [30,"cadena3",true];

arregloEjemplo.push(ejemplo1);
arregloEjemplo.push(ejemplo2);
arregloEjemplo.push(ejemplo3);
// dentro de los parentesis van los parametros que recive la funcion                      
function imprimirRegistros(arreglo:Array<Ejemplo>) : void{ // despues de los dos puntos fuera del parentesis va el tipo de retorno de la funcion
    for (let r of arreglo){
        console.log(r);
        console.log("entro a la funcion ♥");
    }
}

imprimirRegistros(arregloEjemplo);
let encabaezad = document.createElement("h1");
encabaezad.textContent = mensaje;
document.body.appendChild(encabaezad);