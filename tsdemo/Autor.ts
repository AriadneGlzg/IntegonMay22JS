class Autor {
    public nombre : string;
    public imagen : string;
    public correo : string;
    public funcion : string;
    public descripcion : string;
    public status : string;
    public fechaingreso: string;
    constructor(nombre : string, imagen : string, correo : string, funcion : string, descripcion : string,status : string, fechaingreso : string){
        this.nombre = nombre,
        this.imagen = imagen,
        this.correo = correo,
        this.funcion = funcion,
        this.descripcion= descripcion,
        this.status= status,
        this.fechaingreso = fechaingreso 
    }
}
