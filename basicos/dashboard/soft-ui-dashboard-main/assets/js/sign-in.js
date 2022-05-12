// let registro = [{
//     "mail": "mail1@gmail.com",
//     "password": "contrasena1"
// },
// {
//     "mail": "mail2@gmail.com",
//     "password": "contrasena2"
// },{
//     "mail": "mail3@gmail.com",
//     "password": "contrasena3"
// }];
let boton = document.getElementById("botonsignin");
boton.addEventListener("click", singIn);


function singIn(e){
    let divSingin = document.getElementById("singInDiv");
    let nUser = document.getElementById("nUser");
    let miCard = document.getElementById("miCard");
    let email = document.getElementById("idemail");
    let contra=document.getElementById("idcontrasena");
    let valido=false;
    let url = "http://localhost:3005/registros";
   //validaciones para email
   if(email.value===""){
        email.focus();
       alert("Debes ingresar un email");        
   }
   else{
       if(!email.value.includes("@")){
        email.focus();
        alert(`Debes incluir el signo "@" en el email`); 
       }
       else{
           if(contra.value ===""){
               contra.focus();
               alert("debes ingresar una contraseña");
           }
           else
           {
                valido = true; 
           }            
       }
   }

   if(valido){
        fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            let registros = data.registros;
            let usuario = registros.find(u => u.corre == email.value && u.contrasena == contra.value); 
            if(usuario == undefined){
                nUser.removeAttribute("hidden");
                console.log("no existe en el registro");

            }
            else{
                divSingin.style.display="none";
                miCard.removeAttribute("hidden");
                //miCard.innerText = `Bienvenido ${usuario.corre}`;
                console.log(`Bienvenido ${usuario.corre}`);  
            }

        })
        .catch(function(error){
            console.log("el servidor no esta disponible...");
        });



       
   }

}