const ciudad = document.querySelector("#ciudad");
const pais = document.querySelector("#pais");
const formulario = document.querySelector("#formulario");
const container2 = document.querySelector(".container2");


formulario.addEventListener("submit", obtenerClima);

function obtenerClima(e) {
    e.preventDefault();
    console.log(ciudad.value, pais.value)
    //Validar 
    if (ciudad.value != "" || pais.value != "") {
        consultarClima(ciudad.value, pais.value);
    } else {
        mostrarError("ambos campos son obligatorios");
    }
}

function consultarClima(ciudad, pais) {
    const appId = "7cea8c58d4339fd8efffbe5464fefb08";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === "404") {
                mostrarError("no encontramos el clima");
            } else {
                limpiarHTML();
                mostrarDatos(data);
            }
        }
        )
}

function mostrarDatos(datos){
    const {main,coord,name} = datos;
    console.log(main, coord, name) 
    var d = document.createElement("p");
    d.textContent = name + " " + Math.round(main.temp - 273.15) + "°";
    container2.appendChild(d);
    var html = document.querySelector("html");
    if( Math.round(main.temp - 273.15) < 19){
        html.style.background =  "#9ac7b9";  
        html.style.background = "-webkit-linear-gradient(to right,#7b92a8, #9cccbc)"; 
        html.style.background = "linear-gradient(to right, #8aced5, #96c6b7)";  
    }else{
        html.style.background =  "#e47042";  
        html.style.background = "-webkit-linear-gradient(to right,#ca6b1d, #c2ba21)"; 
        html.style.background = "linear-gradient(to right, #9d3518, #d0b830)"; 
    }
}

function limpiarHTML(){
    while(container2.firstChild){
        container2.removeChild(container2.firstChild)
    } 
}


