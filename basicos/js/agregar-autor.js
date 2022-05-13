function agregarAutor(){
    console.log("Funciono♥");
    let nuevoautor = new Autor("Ariadne", "https://64.media.tumblr.com/b98d05defeb5b3617cd2311b113dbdf5/ab31b648c4bf4b63-43/s1280x1920/cc6d31dba2e33660b7d9a8ee087fd68aef7f2276.pnj", "ariadne@gmail.com", "Student", "Developer", "OFFLINE", "04/04/2022");
    let tabla = document.getElementById("tablaautores");
    let fila = document.createElement("tr");
    tabla.style.display="inline";
    fila.innerHTML=`
    <td>
        <div class="d-flex px-2 py-1">
            <div>
            <img src="${nuevoautor.imagen}" class="avatar avatar-sm me-3" alt="user7">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">Mi nuevo autor ♥</h6>
            <p class="text-xs text-secondary mb-0">${nuevoautor.correo}</p>
            </div>
        </div>
        </td>
        <td>
        <p class="text-xs font-weight-bold mb-0">${nuevoautor.funcion}</p>
        <p class="text-xs text-secondary mb-0">${nuevoautor.descripcion}</p>
        </td>
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">${nuevoautor.status}</span>
        </td>
        <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">${nuevoautor.fechaingreso}</span>
        </td>
        <td class="align-middle">
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>
    </td>
    `;
    tabla.appendChild(fila);
}
function agregarAutor3(){
        
    $.ajax({ //es la configuracion de una llamada usando ujquery
        method: 'GET', //post put delete etc
        dataType: 'json', // vas a intercambiar con formato json
        url: 'http://localhost:3005/autores',
        //data: {}, //eso es el id de la cosa del registro que quiere consultar
        success: function (data) {
            const autores=data.autores;
            let tabla = document.getElementById("tablaautores");
            autores.forEach(function(a){
                let fila = document.createElement("tr"); 
                if(a.status.toLocaleLowerCase() == "online"){
                    fila.innerHTML=`
                    <td>
                        <div class="d-flex px-2 py-1">
                            <div>
                            <img src="${a.imagen}" class="avatar avatar-sm me-3" alt="user7">
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${a.nombre} ♥</h6>
                            <p class="text-xs text-secondary mb-0">${a.correo}</p>
                            </div>
                        </div>
                        </td>
                        <td>
                        <p class="text-xs font-weight-bold mb-0">${a.funcion}</p>
                        <p class="text-xs text-secondary mb-0">${a.descripcion}</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-gradient-success">${a.status}</span>
                        </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">${a.fechaingreso}</span>
                        </td>
                        <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                    </td>                
                    `;
                }
                else{
                    fila.innerHTML=`
                    <td>
                        <div class="d-flex px-2 py-1">
                            <div>
                            <img src="${a.imagen}" class="avatar avatar-sm me-3" alt="user7">
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${a.nombre} ♥</h6>
                            <p class="text-xs text-secondary mb-0">${a.correo}</p>
                            </div>
                        </div>
                        </td>
                        <td>
                        <p class="text-xs font-weight-bold mb-0">${a.funcion}</p>
                        <p class="text-xs text-secondary mb-0">${a.descripcion}</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-gradient-secondary">${a.status}</span>
                        </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">${a.fechaingreso}</span>
                        </td>
                        <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                    </td>                
                    `;
                }
                tabla.appendChild(fila);                
            });                
        }
    });
    
}
let aparece = true;
function agregarAutor4(){
    console.log(aparece);
    if(aparece){
        document.getElementById("formAutor").style.display = "inline";
        aparece= !aparece;
    }
    else{
        document.getElementById("formAutor").style.display = "none";
        aparece= !aparece;
    }    
}

function agregarAJAX(){
    console.log("entre al AJAX bish ♥");
    let validados =false;
    let nombre = document.getElementById("Nombre");
    let correo = document.getElementById("Correo");
    let funcion = document.getElementById("Funcion");
    let descripcion = document.getElementById("Descripcion");
    let fecha = document.getElementById("Fecha");
    let status = document.getElementById("Status");

    if(nombre.value === "")
    {
        alert("Debes ingresar tu nombre");
        nombre.focus();
    }
    else
    {
        if(correo.value ===""){
            correo.focus();
            alert("Ingresa un correo electronico");
            
           }
           else{
               if(!correo.value.includes("@")){
                   correo.focus();
                   alert(`Debes incluir el signo "@" en el email`); 
               }
               else
               {
                    if(funcion.value === ""){
                        funcion.focus();
                        alert("Falta ingresar el campo \"Funcion\"");
                    }
                    else{
                        if(descripcion.value === ""){
                            descripcion.focus();
                            alert("Falta ingresar el campo \"Descripcion\"");
                        }
                        else{
                            if(fecha.value === ""){
                                fecha.focus();
                                alert("Falta ingresar el campo \"Fecha de Ingreso\"");
                            }
                            else{
                                if(status.value.toLowerCase() === "online" || status.value.toLowerCase() === "offline"  ){
                                    validados = true;
                                }
                                else{
                                    status.focus();
                                    alert(`"${status.value}" no es un Status valido`);
                                                                   
                                }
                            }
                        }
                    }
               }            
           }
    }

    if(validados)
    {
        $.ajax({ //es la configuracion de una llamada usando ujquery
            method: 'POST', //post put delete etc
            dataType: 'json', // vas a intercambiar con formato json
            contentType : 'application/json',
            url: 'http://localhost:3005/autores',
            //data: {}, //eso es el id de la cosa del registro que quiere consultar 
            data:JSON.stringify({
                "nombre": $("#Nombre").val(),
                "imagen": $("#Imagen").val(),
                "correo": $("#Correo").val(),
                "funcion": $("#Funcion").val(),
                "descripcion": $("#Descripcion").val(),
                "status": $("#Status").val(),
                "fechaingreso": $("#Fecha").val()                     
            }),
            success: function (data) {
                var url ="http://127.0.0.1:5500/dashboard/soft-ui-dashboard-main/pages/tables.html";
                $(location).attr('href',url);           
            }
        });
    }    
}

function agregarAutor2(){

    console.log("Funciono♥");
    let tabla = document.getElementById("tablaautores");
    let autor= tabla.insertRow(-1);
    let nombreAutor = autor.insertCell(0);
    nombreAutor.innerHTML=`
    <div class="d-flex px-2 py-1">
    <div>
        <img src="https://64.media.tumblr.com/b98d05defeb5b3617cd2311b113dbdf5/ab31b648c4bf4b63-43/s1280x1920/cc6d31dba2e33660b7d9a8ee087fd68aef7f2276.pnj" class="avatar avatar-sm me-3" alt="user1">
    </div>
    <div class="d-flex flex-column justify-content-center">
        <h6 class="mb-0 text-sm">Nuevo autor</h6>
        <p class="text-xs text-secondary mb-0">nuevoautor@gmail.com</p>
    </div>
    </div>
    `;
    let autorFunction = autor.insertCell(1);
    autorFunction.innerHTML= `
    <p class="text-xs font-weight-bold mb-0">Student</p>
    <p class="text-xs text-secondary mb-0">Organization</p>
    `;
    let autorStatus = autor.insertCell(2);
    autorStatus.innerHTML= `
    <span class="badge badge-sm bg-gradient-success">Online</span>
    `;
    let autorEmployed = autor.insertCell(3);
    autorEmployed.innerHTML= `
    <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
    `;
    let autorEdit = autor.insertCell(4);
    autorEdit.innerHTML= `
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a> 
    `;
}
