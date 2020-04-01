var esNuevo: boolean = false;
var deseaImprimir:boolean = true;


var aceptaDescuentos: boolean = (15 + 18 == 33 );
console.log('Este descuanto es: ', aceptaDescuentos)

var juan ='juan';
var juan2 = 'Juan';
var sonNombreiguales: boolean = (juan == juan2);
console.log('Nombres son iguales? ', sonNombreiguales)


var sonAmbosVerdaderos:boolean = sonNombreiguales && aceptaDescuentos;
console.log("La suma de dos booleanos: ", sonAmbosVerdaderos);

//== para comparar se es igual 
// != diferente
// || o
// && y
// === identico