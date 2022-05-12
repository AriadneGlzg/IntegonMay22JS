global.XMLHttpRequest = require('xhr2'); //para poder ejecutar con el node hice un npm install xhr2 en la terminal

function accesoAPI(){
    const url = "https://swapi.dev/api/planets/61/";
    let xhttp = new XMLHttpRequest(); // se crea el objeto para hacer el request
    xhttp.open('GET', url);
    xhttp.setRequestHeader('Accept', 'application/json');
   //se delega el evento onreadystatechange
    xhttp.onreadystatechange = function() {
        if (this.readyState == 3){
            console.log("Loading ♥...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
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