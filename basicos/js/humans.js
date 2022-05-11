class Humans{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info(){
        return console.log(this);
    }
}

let paola = new Humans ("Paola", 27, "Female");
let abel = new Humans ("Abel", 28, "Male");
paola.info();
abel.info();