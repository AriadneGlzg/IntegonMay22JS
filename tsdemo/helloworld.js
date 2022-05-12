let arregloEjemplo = [];
let mensaje = "hola mundo ♥";
let dato = 5;
let encendido = false;
console.log(mensaje);
let ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, "cadena1", true];
ejemplo2 = [20, "cadena2", false];
ejemplo3 = [30, "cadena3", true];
arregloEjemplo.push(ejemplo1);
arregloEjemplo.push(ejemplo2);
arregloEjemplo.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let r of arreglo) {
        console.log(r);
        console.log("entro a la funcion ♥");
    }
}
imprimirRegistros(arregloEjemplo);
let encabaezad = document.createElement("h1");
encabaezad.textContent = mensaje;
document.body.appendChild(encabaezad);
//# sourceMappingURL=helloworld.js.map