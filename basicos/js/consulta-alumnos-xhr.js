function accesoAPI(){
    const url = "http://localhost:3005/alumnos";
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
            console.log(alumnitos);
            alumnitos.forEach(function(a){
            let nombre = document.createElement("li");
            nombre.innerText=`Nombre : ${a.nombre} Apellido: ${a.apellido} Ciudad: ${a.ciudad} `;        
            lista.appendChild(nombre);
            }); 
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("No hay alumnos registrados");       
        }

    }
    xhttp.send();
}