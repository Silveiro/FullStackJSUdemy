//VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const  listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];


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
   // console.log(curso);

    const infoCurso = {
        imagen: curso.children[0].src,
        titulo: curso.children[1].children[0].textContent,
        precio: curso.children[1].children[3].children[0].textContent,
        id: curso.children[1].children[4].attributes[2].value,
        cantidad: 1,

    }
    articulosCarrito = [...articulosCarrito,infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML 
function carritoHTML(){
    limpiarHTML();
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad,id} = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="${imagen}" width="100"></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td> <a href="#" class="borrar-curso" data-id="${id}">x</a></td>
    `;

    contenedorCarrito.appendChild(row);
});
}

function limpiarHTML(){
    contenedorCarrito.innerHTML = "";
}