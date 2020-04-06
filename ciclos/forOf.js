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
//    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
//}
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var Usuario = listadoDeUsuarios_1[_i];
    console.log(Usuario.nombre);
}
