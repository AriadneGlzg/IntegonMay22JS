function agregarAutor(){
    console.log("Funciono♥");
    let tabla = document.getElementById("tablaautores");
    let fila = document.createElement("tr");
    fila.innerHTML=`
    <td>
        <div class="d-flex px-2 py-1">
            <div>
            <img src="https://64.media.tumblr.com/b98d05defeb5b3617cd2311b113dbdf5/ab31b648c4bf4b63-43/s1280x1920/cc6d31dba2e33660b7d9a8ee087fd68aef7f2276.pnj" class="avatar avatar-sm me-3" alt="user7">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">Mi nuevo autor ♥</h6>
            <p class="text-xs text-secondary mb-0">nuevo.autor@ngic.com</p>
            </div>
        </div>
        </td>
        <td>
        <p class="text-xs font-weight-bold mb-0">Student</p>
        <p class="text-xs text-secondary mb-0">Organization</p>
        </td>
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">Onffline</span>
        </td>
        <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
        </td>
        <td class="align-middle">
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>
    </td>
    `;
    tabla.appendChild(fila);
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
