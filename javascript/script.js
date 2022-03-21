
/* Contadores */

export let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;

/* Imagenes */
const img1 = document.getElementById("Image1"); //valor1
const img2 = document.getElementById("Image2"); //valor2
const img3 = document.getElementById("Image3"); //valor3
const img4 = document.getElementById("Image4"); //valor4
const img5 = document.getElementById("Image5"); //valor5

/* valores */

export var valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
let valor4 = document.getElementById("valor4");
let valor5 = document.getElementById("valor5");

/* Funciones Principales */
// console.log("valorreal", valor1);
img1?.addEventListener("click", () => {
  window.open("./PopUp/image1.html", "Conejo", "width=800, height=400");
});

img2?.addEventListener("click", () => {
  contador2++;
  valor2.innerHTML = contador2;
});

img3?.addEventListener("click", () => {
  window.open("./PopUp/image3.html", "Gallo", "width=800, height=400");
});

img4?.addEventListener("click", () => {
  contador4++;
  valor4.innerHTML = contador4;
});

img5?.addEventListener("click", () => {
  window.open("./PopUp/image5.html", "Panda", "width=800, height=400");
});

/* var cont = contador1
var valor = valor1

export function sumaValor(valor, cont) {
  cont++;
  valor1.innerHTML = "" +cont;
  console.log("valor2", valor);
} */
