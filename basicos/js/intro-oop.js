//todas las caracteristicas de un animal relevantes para nuestro sistema
//se encapsulan en una clase que abstrae dichas caracteristicas
class Animal { //class para definir la clase, despues va el nombre de la clase
    constructor(nombre, tipo){//ahi van los atributos
        this.nombre = nombre;
        this.tipo = tipo;
    } 

    consultaDetalles(){ //metodo
        return (`El nombre del animal es ${this.nombre} y su tipo es ${this.tipo}`);
    }     
} 

function imprimeAnimal(animal){
    //console.log(typeof animal);
    try{
        console.log(animal.consultaDetalles());
    }
    catch{
        console.log(`Se recibio un objeto del tipo ${typeof animal} y se espera uno de tipo ANIMAL`);
    }
    
    
}
//se esta instanciando la clase animal y se crea por ende un objeto de tipo animal el objeto es animal1
let animal1= new Animal("foca","mamifero"); 
let animal2= new Animal("abeja","insecto"); 
console.log (animal1.consultaDetalles());
imprimeAnimal(100);