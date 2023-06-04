let tickets = 0
let descuentoSeleccionado = 0
let total = 0


function getValueFromResumen(){
    tickets = document.getElementById('CantidadTickets').value  //tomo el input "Cantidad" y lo meto en una variable
    descuentoSeleccionado = document.getElementById('Descuento').value //tomo el input "Descuento" y lo meto en otra variable
    console.log("Cantidad de tickets seleccionada: "+ tickets)//muestro en consola
    console.log("Descuento seleccionado: "+ descuentoSeleccionado) //muestro en consola
    total = tickets*descuentoSeleccionado*200     //calulo valor total de los tickets con descuento y lo meto en una variable
    document.getElementById('aPagar').innerText='$'+ total.toFixed(2)    //meto el resultado en el párrafo <p> con id="aPagar"
}

function borrar (){
    document.getElementById('aPagar').innerText='';
}