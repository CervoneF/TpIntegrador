let cantidadTickets = 0
let descuentoSeleccionado = 0
let totalAPagar = 0


function getValueFromInput(){
    cantidadTickets = document.getElementById('inputCantidad').value  //tomo el input "Cantidad" y lo meto en una variable
    descuentoSeleccionado = document.getElementById('inputDescuento').value //tomo el input "Descuento" y lo meto en otra variable
    console.log("Cantidad de tickets seleccionada: "+cantidadTickets)//muestro en consola
    console.log("Descuento seleccionado: "+descuentoSeleccionado) //muestro en consola
    totalAPagar = cantidadTickets*descuentoSeleccionado*200     //calulo valor total de los tickets con descuento y lo meto en una variable
    document.getElementById('aPagar').innerText='$'+totalAPagar.toFixed(2)    //meto el resultado en el párrafo <p> con id="aPagar"
}