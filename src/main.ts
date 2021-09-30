
console.log("Hola Mundo");
//Declarations
var info: boolean;
var notificacion: string;
var numero: number;
var numero2: number;

var array: Array<any> = new Array<any>();

info = false;
notificacion = `Esto es una prueba conjunto ${info}`

array.push('1', 2, '3');

numero = 1;
numero2 = 3;

console.log(`La suma es: ${numero + numero2}`);


console.log(notificacion);

array.forEach((element) => console.log(element));



enum colores {'red', 'green', 'blue'};

var red: colores = colores.red;

console.log('Enumeradores', red);

