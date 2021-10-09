const prender =     document.getElementById("on-button")
const apagar =      document.getElementById("off-button")


prender.addEventListener('click', () => {
    enviarDatos('1');
})

apagar.addEventListener('click', () => {
    enviarDatos('0');
})


function enviarDatos(valor){

}