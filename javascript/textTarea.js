/* console.log("holaa"); */

document.querySelector('#textTareaButton').addEventListener('click', traerDato);
const textarea = document.querySelector('#floatingTextarea2')

function traerDato() {


    const ajax = new XMLHttpRequest();

    ajax.open("GET", "../home.json", true);
    ajax.send();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dato = JSON.parse(this.response)
           

            textarea.setAttribute("placeholder", dato.texto );
        }
    }
}