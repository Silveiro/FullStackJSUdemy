//Variables 
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const year = document.querySelector("#year");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


const max = new Date().getFullYear();
const min = max-10;
const resultado = document.querySelector("#resultado");

//generar un objeto con la busqueda 
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
};


//Eventos 
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();
    
    //Llena las opciones de años
    llenarSelect();
});

//Event listener para los select de busqueda
marca.addEventListener("change", e => {datosBusqueda.marca = e.target.value;filtrarAuto();})
minimo.addEventListener("change", e => {datosBusqueda.minimo = e.target.value;filtrarAuto();})
maximo.addEventListener("change", e => {datosBusqueda.maximo = e.target.value;filtrarAuto();})
year.addEventListener("change", e => {datosBusqueda.year = e.target.value;filtrarAuto();})
puertas.addEventListener("change", e => {datosBusqueda.puertas = e.target.value;filtrarAuto();})
transmision.addEventListener("change", e => {datosBusqueda.transmision = e.target.value;filtrarAuto();})
color.addEventListener("change", e => {datosBusqueda.color = e.target.value;filtrarAuto();})




//funciones
function mostrarAutos (){
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio, color} = auto
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `
        ${marca}${modelo} - ${year} - ${puertas}Puertas - Transmisión: ${transmision} ${precio} ${color}
        `;


        //insertar el HTML 
        resultado.appendChild(autoHTML);
    });
}

function llenarSelect(){
    for(var i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
    return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto){
    if(datosBusqueda.year){
    return auto.year === datosBusqueda.year;
    }
    return auto;
}