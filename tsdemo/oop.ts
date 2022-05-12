class Empleado{
    public nombre:string;
    public telefono: string;
    
    constructor(nombre: string, telefono: string){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre(){
        return this.nombre;
    }
    getTelefono(){
        return this.telefono;
    }

    setNombre(nombre:string){
        this.nombre=nombre;
    }

    setTelefono(telefono:string){
        this.telefono=telefono;
    }
}
class Manager extends Empleado{
    private nSubordinados:number;
    constructor(nombre: string, telefono: string, nSubordinados: number){
        super(nombre, telefono);
        this.nSubordinados=nSubordinados
        }

}

let empleado1 = new Empleado("Paola Gonzalez","4431066186");
console.log(empleado1.getNombre());
console.log(empleado1.telefono);