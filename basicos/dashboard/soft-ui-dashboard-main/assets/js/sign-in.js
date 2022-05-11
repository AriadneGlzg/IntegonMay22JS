let usuario = [{
    "mail": "mail1@gmail.com",
    "password": "contrasena1"
},
{
    "mail": "mail2@gmail.com",
    "password": "contrasena2"
},{
    "mail": "mail3@gmail.com",
    "password": "contrasena3"
}];
let boton = document.getElementById("botonsignin");
boton.addEventListener("click", singIn);   

function singIn(e){
    let email = document.getElementById("idemail").value;
    let contrasena=document.getElementById("idcontrasena").value;
    if(contrasena=="" || email =="")
    {
        alert("debes ingresar todos los campos");
    }
    if(email=== usuario.mail){
        console.log("son iguales");
    }
    console.log(`Datos de usuario almacenado mail: ${usuario[0].mail} password: ${usuario[0].password}`);
    console.log(`Datos de usuario ingresado mail: ${email} password: ${contrasena}`);
}