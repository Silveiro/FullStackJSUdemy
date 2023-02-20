//VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const  listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");


cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener("click", agregarCurso);
    carrito.addEventListener("click", eliminarCurso);
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = [];
        limpiarHTML();
    });
}


//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado)
}
}

//Eliminar un curso del carrito 
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoid = e.target.getAttribute("data-id");
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoid)
        carritoHTML();
   
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
    // Revisa si un elemento ya no existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
            curso.cantidad ++;
            return curso; // retorna el objeto actualizado 
            }else{
                return curso; // retorna los objetos que no son duplicados
            }
        })
    }else{
        articulosCarrito = [...articulosCarrito,infoCurso];
    }
    //Agrega elementos al arreglo del carrito 
    
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