//VARIABLES
var user = prompt("cual es tu nombre?");
document.getElementById("carrinho").addEventListener("click", mostrarCarrito);
var cart = [];
var car = document.getElementById("carrinhoTable");
var userSelected = [];
const ArrayElements = (element, index) => {
    console.log(`a[${index}] = ${element.id}`);
    car.innerHTML = `<td><tr> ${element.id} </tr><tr>${element.info.nombre}</tr></td>`
}


//document.getElementsByClassName("curso")[0].firstElementChild.attributes[0].ownerElement.childNodes[1].src //
//document.getElementsByClassName("botoni")[0].parentElement.parentElement.id //


// OBJETOS CURSOS//  

var curso1 = {
    id: "curso1",
    img: "/Carrito de compras/img/curso1.jpg",
    info:{
        nombre: "HTML y CSS básico",
        description:"Aprende a renderizar aplicaciones web nivel intermedio.",
        price:"COP $240.000"
    }
}
var curso2 = {
    id: "curso2",
    img: "/Carrito de compras/img/curso2.jpg",
    info:{
        nombre: "HTML y CSS intermedio",
        description:"Aprende a renderizar aplicaciones web nivel intermedio.",
        price:"COP $210.000"
    }
}
var curso3 = {
    id: "curso3",
    img: "/Carrito de compras/img/curso3.jpg",
    info:{
        nombre: "HTML y CSS avanzado",
        description:"Aprende a renderizar aplicaciones web nivel intermedio.",
        price:"COP $230.000"
    }
}


//SCRIPTING CURSOS//
var cur1 = document.getElementById("curso1");
var cur2 = document.getElementById("curso2");
var cur3 = document.getElementById("curso3");


(function loadCurso(){
    console.log("load")
cur1.innerHTML = `<div class="imagen"> 
<img src="${curso1.img}" alt="curso1">
</div>
<div class="info">
<h2>${curso1.info.nombre}</h2>
<p>${curso1.info.description}</p>
<p>${curso1.info.price}</p>
<button class="botoni">Agregar al carrito</button>
</div>
`
cur2.innerHTML = `<div class="imagen"> 
<img src="${curso2.img}" alt="curso2">
</div>
<div class="info">
<h2>${curso2.info.nombre}</h2>
<p>${curso2.info.description}</p>
<p>${curso2.info.price}</p>
<button class="botoni">Agregar al carrito</button>
</div>
`
cur3.innerHTML = `<div class="imagen"> 
<img src="${curso3.img}" alt="curso3">
</div>
<div class="info">
<h2>${curso3.info.nombre}</h2>
<p>${curso3.info.description}</p>
<p>${curso3.info.price}</p>
<button class="botoni">Agregar al carrito</button>
</div>
`;})();


//FUNCIONES 
inic(user);
inic2(user);
function inic(x){
    var myArray = x.split(" ");
    var letter = myArray[0][0] + myArray[1][0];
    document.getElementById("iniciales").innerHTML = letter;
}
function inic2(x){
    var myArray = x.split(" ");
    var letter = myArray[0];
    document.getElementById("nameMain").innerHTML = "Let's start learning, "+ letter;
}






function mostrarCarrito(){
    cart.forEach(ArrayElements);
    
   

    if( car.style.display != "block"){
        car.style.display ="block";
    } 
    else if(car.style.display != "none"){
        car.style.display ="none";
    }
}

window.onload = function(){
    userSelected = document.querySelectorAll(".botoni");
    userSelected.forEach(element => {
        addEventListener("click",AgregarCarrito);
    })
    console.log(userSelected);

}

function AgregarCarrito(e){
console.log(e.explicitOriginalTarget.parentElement.parentElement)
var element = e.explicitOriginalTarget.parentElement.parentElement.id;
if(element === "curso1"){
cart.push(curso1)
}else if(element === "curso2"){
cart.push(curso2)
}else if(element === "curso3"){
cart.push(curso3)
}else{}

console.log(cart)
}