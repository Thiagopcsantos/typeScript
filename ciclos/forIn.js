var listadoDeUsuarios = [
    {
        nombre: "Vale",
        apellido: "Lamas"
    },
    {
        nombre: "Maxi",
        apellido: "Cavalcante"
    },
    {
        nombre: "Thiago",
        apellido: "Pereira"
    }
];
//for (let cantidadRepetir: number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++){
//  console.log(listadoDeUsuarios[cantidadRepetir].nombre);
//}
for (var posicion in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[posicion].nombre);
    console.log(listadoDeUsuarios[posicion].apellido);
}
