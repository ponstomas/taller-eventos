window.addEventListener("DOMContentLoaded", (event) => {

const divb = document.getElementById("divb");
const boton = document.getElementById("boton");

function saludar(event){
    event.stopPropagation();
    alert("Hola!");
}

function saludodiv(){
    alert("Hola! Soy el div");
}

boton.addEventListener("click", saludar);

divb.addEventListener("click", saludodiv);


});

