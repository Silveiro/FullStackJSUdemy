document.addEventListener("DOMContentLoaded", validar);

function validar (){
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const Formulario = document.querySelector("#formulario");


    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)
    function validar(e){
        if( e.target.value.trim() === ""){
            var id = e.target.id;
            mostrarAlerta(`el Campo ${id} está vacio`, e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia){
        const alerta = referencia.querySelector(".alerta");
        if(!alerta){
            const error = document.createElement("p");
            error.textContent = mensaje
            error.classList.add("bg-red-600", "text-white", "p-2", "text-center","alerta")
            referencia.appendChild(error)
        }else{
            
    }
    }
}

function limpiarAlerta (referencia){
    if(referencia.querySelector(".alerta")){
        const er = referencia.querySelector(".alerta");
        er.remove();
    }
}
