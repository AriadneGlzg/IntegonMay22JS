//const fetch = require('node-fetch');

async function demoFetchAPI(){
    let url = "http://localhost:3005/autores";
    let response = await fetch(url);
    let autores = await response.json();
    console.log(autores);
} 

demoFetchAPI();