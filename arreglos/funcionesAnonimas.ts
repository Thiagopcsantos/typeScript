interface Alumno{
    nombre:string;
    apellido:string;
}


var alumnos: Alumno [] = []

alumnos.push({nombre:"Ana", apellido:"Piñeda"});

alumnos.push({nombre:"Carmen", apellido:"Caro"});

alumnos.push({nombre:"Julia", apellido:"juju"});


alumnos.forEach((alumno)=>{
    console.log(alumno.nombre)
})