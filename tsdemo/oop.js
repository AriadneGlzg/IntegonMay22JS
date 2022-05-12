class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, nSubordinados) {
        super(nombre, telefono);
        this.nSubordinados = nSubordinados;
    }
}
let empleado1 = new Empleado("Paola Gonzalez", "4431066186");
console.log(empleado1.getNombre());
console.log(empleado1.telefono);
//# sourceMappingURL=oop.js.map