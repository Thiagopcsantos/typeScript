class Alumno{
    private nombre: string;
    private apellido: String;
    private peso :number;

    mostrarMensaje(): void
    {
        console.log("Hola", this.nombre, this.apellido)
        console.log("¿Cómo estás? ")

    }

    asignar(nombreParametro:string, apellidoParametro:string, pesoParametro: number){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    }
} 

var alumno1: Alumno = new Alumno();
alumno1.asignar("Maximo", "Cavalcante", 11)

var alumno2: Alumno = new Alumno();
alumno2.asignar("valentina", "Lamas", 55)

var alumno3: Alumno = new Alumno();
alumno3.asignar("Maria", "Loreto", 70)
