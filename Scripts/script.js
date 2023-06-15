//Agregar Comentarios
function agregarTarea() {
    let input = document.getElementById('nuevaTarea');
    let ul = document.getElementById('listaTareas');
    let li = '<li>' + input.value + '</li>';
    ul.innerHTML += li;
    input.value = '';
}

function eliminarTarea(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
}
//Cierre Agregar Comentarios

//Menu desplegable
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}
//Cierre Menu desplegable