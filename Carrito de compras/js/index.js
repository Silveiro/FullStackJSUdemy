//VARIABLES
var user = prompt("cual es tu nombre?");
var userSelected = document.getElementsByClassName("botoni");

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



(function(){
    var cart = [];
for(let i = 0 ; i< userSelected.length; i++){
    userSelected[i].addEventListener("click", function(){
        cart.push(i);
        console.log(cart)
    })
}
})();


