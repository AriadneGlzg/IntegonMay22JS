class Humans{
    constructor(name, age, gender){
        this.name = name; // el this es una forma de dicrle aqui que no es el name del constructor si no el name de esta "this" clase
        this.age = age;
        this.gender = gender;
    }

    info(){
        return console.log(this);
    }
    cosa(){
        return this.age;
    }
}

let paola = new Humans ("Paola", 27, "Female");
let abel = new Humans ("Abel", 28, "Male");
paola.info();
abel.info();
console.log(paola.name);
console.log(paola.age);