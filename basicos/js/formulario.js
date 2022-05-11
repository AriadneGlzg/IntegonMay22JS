
function validacionFormulario ()
{
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ingreso = document.getElementById("ingreso").value;
    let registro =[];    
    
    if (edad === "" || edad <= 0){
        alert("El campo de edad debe ser llenado y no puede ser negativo"); 
    }        
    else{
        if(ingreso === ""){
            alert("Debes llenar el campo de Ingreso");
        }
        else{
            if(ingreso<0){
                alert("El ingreso debe ser mayor a igual cero");
            } 
            else{
                if(nombre == ""){
                    alert("Es necesario introducir un nombre");
                }
                else{
                    console.log(registro[0]);
                    registro.push({
                        "Nombre" : nombre,
                        "Edad" : edad,
                        "Ingresos" : ingreso
                    });
                    console.log(registro[0]);
                    alert("El registro se creo con exito ♥");
                    alert(`♥Nombre: ${registro[0].Nombre} Edad:${registro[0].Edad} Ingresos: ${registro[0].Ingresos}♥`);
                }                
            }                
        } 
    }
}
