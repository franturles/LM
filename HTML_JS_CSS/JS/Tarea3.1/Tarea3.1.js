/*****
Boletin de ejercicios 3.1
// 1. 
 /*alert("Hola mundo")*/
/*
// 2.
let a
let b
a = prompt("Dime un numero")
b = prompt("Dime un numero")
a = parseFloat(a)
b = parseFloat(b)
alert(a+b)
*/
/* 
// 3.
/*
var pi = 3.14
var radio = prompt("Indica el radio")
radio = parseInt(radio)
var Area_Circulo = pi * radio * radio
alert(Area_Circulo)
*/
// 4
/*
var a = prompt("Inserta un Numero")
var b = prompt("Insertaa otro mas")
var c = prompt("El ultimo...")
var resultado

if (a > b){
    if (a > c)
        resultado = a
    else 
        resultado = c
}else{
    if (b > a)
        resultado = b
    else 
        resultado = c
}
alert(resultado)
*/
// 5
/*
var a = prompt("Escribe un numero")
var b = prompt("Pon otro numero")
var c = prompt("Un ultimo...")
if (a % 7 == 0 || b % 7 == 0 || c % 7 == 0) {
    alert("Es un numero de tipo A")
} else if (a < 0 && a % 3 == 0 || b < 0 && b % 3 == 0 || c < 0 && c % 3 == 0) {
    alert("Es un numero de tipo B")    
} else {
    alert("Es un numero de tipo C")
}
*/
// 6
/*
var a = prompt("Introduce un numero")
if (a < 100 && a >= 0) {
    for (let i = 0; i < a; i++) {
        alert(i)
    }
}
*/
// 7
/*
var a = prompt("Introduce un numero")
if (a < 100 && a >= 0) {
    for (let i = 0; i < a; i = i + 2) {
        alert(i)
    }
}
*/
// 8 
/*
var a = prompt("Introduce un numero")
var b = prompt("Introduce otro numero")
if (a >= b){
    mas = a;
    menos = b;
}else{
    mas = b;
    menos = a;
}
for (var i = menos; i <= mas; i++)
alert(i)
*/
// 9
var coche = prompt("Elige: BMW o AUDI O VOLVO")
var año = prompt("Cuantos años desea pagar")
var AUDI = 25000
var BMW = 30000
var VOLVO = 35000

