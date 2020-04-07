var Alumno = /** @class */ (function () {
    function Alumno() {
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre, this.apellido);
        console.log("¿Cómo estás? ");
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.asignar("Maximo", "Cavalcante", 11);
var alumno2 = new Alumno();
alumno2.asignar("valentina", "Lamas", 55);
var alumno3 = new Alumno();
alumno3.asignar("Maria", "Loreto", 70);
