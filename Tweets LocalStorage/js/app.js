
const botonAgregar = document.querySelector("#formulario .button");
const listaTweets = document.getElementById("lista-tweets");
var tweet = document.getElementById("tweet");

botonAgregar.addEventListener("click", agregarTweet);
tweet.addEventListener("input", valorTweet)


function agregarTweet(e) {
    e.preventDefault();
    if (tweet.value.length > 0) {
        console.log("largo")
        pushear(tweet.value);

    } else {
        const msg = " es corto"
        error(msg);
    }
}

function pushear(tweet) {
    const parrafo = document.createElement("div");
    const parrafop = document.createElement("p");
    const equis = document.createElement("p");
    var ids = Date.now();
    parrafop.textContent = tweet;
    equis.textContent = "x";
    equis.setAttribute("class", "ex")
    equis.addEventListener("click", eliminar);
    parrafo.setAttribute("id", ids);
    parrafo.appendChild(parrafop);
    parrafo.appendChild(equis);
    listaTweets.appendChild(parrafo);
}



function error(msg) {
    console.log("error" + msg)
}

function valorTweet() {

    console.log(tweet.value)
}

function eliminar(e) {
    var idstweets = listaTweets.childNodes;
    idstweets.forEach(element => {
        if (element.attributes[0].value === e.target.parentElement.attributes[0].value) {
            deleted(element);
        } else {
            return ("nop")
        }
    });
}

function deleted(id) {
    console.log(id)
    var idstweets = listaTweets.childNodes;
    var arry = [];
    for (var i = 0; i < idstweets.length; i++) {
        arry.push(idstweets[i])
        
    }
    console.log(arry)
    const result = arry.filter(element => element != id);
    pusheart(result);
}

function pusheart(result){
    
    pusheart(result)
}

function pusheart(algo){
    limpiarHTML();
   algo.forEach(element => {
    const parrafo = document.createElement("div");
    const parrafop = document.createElement("p");
    const equis = document.createElement("p");
    var ids = Date.now();
    parrafop.textContent = element.textContent;
    equis.textContent = "x";
    equis.setAttribute("class", "ex")
    equis.addEventListener("click", eliminar);
    parrafo.setAttribute("id", ids);
    parrafo.appendChild(parrafop);
    parrafo.appendChild(equis);
    listaTweets.appendChild(parrafo);
   });
}


function limpiarHTML(){
    listaTweets.innerHTML = "";
}