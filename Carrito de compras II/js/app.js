//VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const  listaCursos = document.querySelector("#lista-cursos");

cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener("click", agregarCurso);
}


//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado)
}
}


//leee datos del curso clickeado
function leerDatosCurso(curso){
    console.log(curso);

    const infoCurso = {
        imagen: curso.children[0].src,
        titulo: curso.children[1].children[0].textContent,
        precio: curso.children[1].children[3].children[0].textContent,
        id: curso.children[1].children[4].atributes[2].value,
        cantidad: 1

    }
    console.log(infoCurso)
}
