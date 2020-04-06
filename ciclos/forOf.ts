interface Usuario{
    nombre: string;
    apellido: string;
}

var listadoDeUsuarios: Array<Usuario> = [
    {
        nombre: "Vale",
        apellido: "Lamas"
    },
    {
        nombre: "Maxi",
        apellido:"Cavalcante"
    },
    {
        nombre: "Thiago",
        apellido:"Pereira"
    }
    
]
//for (let cantidadRepetir: number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++){
//    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
//}

for( let Usuario of listadoDeUsuarios){
    console.log(Usuario.nombre)

}