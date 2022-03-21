import { contador1, valor1,  } from "./script.js";
/* 
export var valor = valor1  */
/* import {sumaValor} from "./script.js" */

var vaalor = document.querySelector("#valor1")
console.log(vaalor)
var n = contador1;

export let boton = document.getElementById("BotonSumaOk") //Boton OK
let botonCerrar = document.getElementById("BotonCerrar"); //valor1


botonCerrar?.addEventListener("click", () => {
  window.close();
});

boton?.addEventListener("click", window.onload = function sumaValor() {
  
  return n = n+ 1;
 /*  console.log(n);
  
    // var cont = 0;  
    //  cont++;
    // console.log("contador1", typeof cont);
     console.log(vaalor );
     vaalor.innerHTML = n; */
    
  });
