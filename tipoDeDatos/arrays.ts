interface Alumnos{
    nombre: string;
    edad: number;
}


var listadoDeNombres: Array<string>= ["Juana", "Carmen", "Ana", "Maria"];
var listadoDeNumeros: Array<number> = [11, 13, 45, 56, 78]


var listadoDeAlumnos: Array<Alumnos> = [
    {
        nombre: "Maria",
        edad: 13
    },
    {
        nombre: "Ana",
        edad: 33
    }
]

console.log(listadoDeNumeros);
console.log(listadoDeNombres);
console.log(listadoDeAlumnos[1].nombre);