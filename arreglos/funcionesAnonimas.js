var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "Piñeda" });
alumnos.push({ nombre: "Carmen", apellido: "Caro" });
alumnos.push({ nombre: "Julia", apellido: "juju" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
