console.log("Hola Mundo");
//Declarations
var info;
var notificacion;
var numero;
var numero2;
var array = new Array();
info = false;
notificacion = "Esto es una prueba conjunto " + info;
array.push('1', 2, '3');
numero = 1;
numero2 = 3;
console.log("La suma es: " + (numero + numero2));
console.log(notificacion);
array.forEach(function (element) { return console.log(element); });
var colores;
(function (colores) {
    colores[colores["red"] = 0] = "red";
    colores[colores["green"] = 1] = "green";
    colores[colores["blue"] = 2] = "blue";
})(colores || (colores = {}));
;
var red = colores.red;
console.log('Enumeradores', red);
