function accesoAPI(){
    const url = "https://localhost:3005/alumnos";
    let xhttp = new XMLHttpRequest(); // se crea el objeto para hacer el request
    let lista= document.getElementById("listaAlumos");
    let alumnitos=[];
    xhttp.open('GET', url);
    xhttp.setRequestHeader('Accept', 'application/json');
   //se delega el evento onreadystatechange
    xhttp.onreadystatechange = function() {
        if (this.readyState == 3){
            console.log("Loading ♥...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            alumnitos =data.alumnos;
            alumnos.forEach(function(a){
        let nombre = document.createElement("li");
        nombre.innerText=`nombre : ${a.nombre}`;
        let apellido = document.createElement("li");
        nombre.innerText=`nombre : ${a.apellido}`;
        let ciudad = document.createElement("li");
        nombre.innerText=`nombre : ${a.ciudad}`;
        
        lista.appendChild(nombre);
        lista.appendChild(apellido);
        lista.appendChild(ciudad);
    }); 
            
            console.log(JSON.stringify(data));       
            console.log(data.name);
            console.log(data.rotation_period);
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("No esta registrado ese planeta");       
        }

    }
    xhttp.send();
}

accesoAPI();

//     let lista= document.getElementById("listaAlumos");
//     alumnos.forEach(function(a){
//         let nombre = document.createElement("li");
//         nombre.innerText=`nombre : ${a.nombre}`;
//         let apellido = document.createElement("li");
//         nombre.innerText=`nombre : ${a.apellido}`;
//         let ciudad = document.createElement("li");
//         nombre.innerText=`nombre : ${a.ciudad}`;
        
//         lista.appendChild(nombre);
//         lista.appendChild(apellido);
//         lista.appendChild(ciudad);
//     }); 