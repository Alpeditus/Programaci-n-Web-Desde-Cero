// alert("Hola este es mi Javascript.");
// let nombre = "Cristian";
// console.log(nombre);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

// Condicional
if (textoTitulo == "Nombre") {
  titulo.innerHTML = "Otro";
} else {
  console.log("No se cumple.");
}

// Funciones
let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.getElementById("ejercicio");
console.log(parrafo.textContent);

function cambiarTexto(nombre, ciudad, gusto) {
let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo enCaballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
return contenido;
}

 let parrafo2 = cambiarTexto(nombre,ciudad,gusto);
 parrafo.textContent = parrafo2;