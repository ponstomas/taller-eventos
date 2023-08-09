window.addEventListener("DOMContentLoaded", (event) => {

const divb = document.getElementById("boton");

function saludar(){
    alert("Hola!")
}

function saludodiv(){
    alert("Hola! Soy el div")
}

divb.addEventListener("click", saludodiv)


});

