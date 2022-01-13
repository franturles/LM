/*****
Boletin de ejercicios 3.2
*/
// 1
/*
var a = parseInt(prompt("Introduce un numero"))
if (isNaN(a) ||a > 10 || a < 0) {
    alert("Error pon otro numero")
for (let i = 0; i < 10; i++) {
    if (a <= 10 && a >= 0) {
    var total = a*i
    alert(total)
    }
}
*/
/*
do {
    if (isNaN(a) ||a > 10 || a < 0) {
        alert("Error pon otro numero")  
        
        } while (isNaN(a) ||a > 10 || a < 0);
    }
*/
//2
/*
var total = 0
var a
var notas = 0
for (let i = 0; i < 10 ; i++) {
    a = parseInt(prompt("Introduce un numero"))
    do {
        if(isNaN(a))
        alert("ERROR")
    } while (isNaN(a));
    total = a + total   
    alert(total)
}

notas = total / 10
alert(notas)
*/
// 3
/*
var a
var impar 
var par
for (let i = 0; i < 5; i++){
    do {
        a = parseInt(prompt("Escribe un numero"))
        if (isNaN(a)){
        alert("Numero Incorrecto")
        }
    }while (isNaN(a));
    par = 0
    impar = 0
    if (a%2 == 0){
        alert("Numero de pares" + par + 1)
    }else{
        alert("Numero de impares" + impar + 1)
        }
}
*/
// 4
/*
var a 
do {
    a = prompt("Escribe algo")
    if(a !="Parar" || a !="Detener"){
    } 
} while (a !="Parar" && a !="Detener");
*/
// 5
/*
var Modulos
var nota
for (let i = 0; i < 10; i++) {
    do {
    nota = prompt("Introduce una nota")
    Modulos = prompt("¿Cuantos Modulos?")
        if(isNaN(nota || Modulos)) {
        alert("Error inserte un numero")
        }
    } while (isNaN(nota || Modulos));
    do {
    if (nota < 10){
    alert("Prueba")
    }
    } while (condition);
}
*/
// 6
/*
var numero
var total
var limite
    do {
        total = 0
        numero = prompt("Introduce un numero")
        total = numero + total
        if(total <= 50){

        }
    } while (total <= 50);
    alert("Termino")
*/