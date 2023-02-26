document.addEventListener("DOMContentLoaded", validar);
const email = {
    email:"",
    asunto:"",
    mensaje:""
}
const btnSubmit = document.querySelector(".flex-1:nth-child(1)");
function validar() {
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const Formulario = document.querySelector("#formulario");
    


    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)
    function validar(e) {
        limpiarAlerta(e.target.parentElement);
        if (e.target.value.trim() === "") {
            var id = e.target.id;
            mostrarAlerta(`el Campo ${id} está vacio`, e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return;
        }
        if (e.target.id === "email" && !validarEmail(e.target.value)) {
            mostrarAlerta("El email no es valido", e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores 
        email[e.target.name] = e.target.value.trim();
        comprobarEmail(email)
    }

    function mostrarAlerta(mensaje, referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (!alerta) {
            const error = document.createElement("p");
            error.textContent = mensaje
            error.classList.add("bg-red-600", "text-white", "p-2", "text-center", "alerta")
            referencia.appendChild(error)
        } else {

        }
    }
}

function limpiarAlerta(referencia) {
    if (referencia.querySelector(".alerta")) {
        const er = referencia.querySelector(".alerta");
        er.remove();
    }
}

function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return (resultado);
}

function comprobarEmail(email){
    if(Object.values(email).includes("")){

    }else{
        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    }
}