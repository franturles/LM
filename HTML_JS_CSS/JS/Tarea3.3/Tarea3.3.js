/*****
Boletin de ejercicios 3.2
*/
// 
/*
// 1
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i = 0; i < meses.length; i++) {
    alert(meses[i])
    
}*/
// 2
/*
var num = new Array(10)
for(var i = 0; i < num.length; i++){
    do {
        
    num[i] = prompt("inserte un numero")
    if (isNaN(num[i])){
        alert("No es un numero")
    }
    } while (isNaN(num[i]));
    alert("Array lleno con " + num.length )
}

var par = 0
var impar = 0
for(var i = 0; i < num.length; i++){
    if(num[i]%2==0){
        par++
    }else {
           impar = impar + num[i]
   }
}
alert("Aqui hay " + par + " pares")
impar = impar / impar
alert("Aqui hay " + impar + "pares")
*/

// 3
/*
var num = new Array(10)
var mayor
for(var i = 0; i < num.length; i++){
    do {
    num[i] = prompt("inserte un numero")
    if (isNaN(num[i])){
        alert("No es un numero")
    }
    } while (isNaN(num[i]))
    alert("Rellene el Array numero:" + i)
    }
    mayor = num[0]
    for(var j = 0; j < num.length; j++){
        if(num[j]>mayor){
            mayor = num[j]
        }
    }
alert("El numero mas grande es " + mayor)
*/
// 4
/*
var num = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
do {
     DNI = prompt("Inserte el DNI")
    if(isNaN(DNI) || DNI.length > 8 || DNI.length < 8){
         alert("Vuelve a introducirlo")
    }
} while (isNaN(DNI) || DNI.length > 8 || DNI.length < 8);
Total = 0
Total = DNI % 23
alert(num[Total])
*/
// 5
/*
var rep = new Array(10)
var inv = new Array(10)
for (var i = 0; i < rep.length; i++){
    inv[9-i] = rep[i]
}
alert(rep)
alert(inv)
*/
// 6
/*
var miArray = [1, 2, 3, 45, 4, 5, 6, 7, 8, 9, 10]
var esta = new Boolean(false)
var valor = prompt("Introduce el valor a buscar en el array")

for (var i = 0; i < miArray.length; i++) {
    if (valor == miArray[i]) {
        posicion = i
        esta = true
    }
}
if (esta == true) {
    alert("El valor que buscas esta en la posición: " + posicion)
} else {
    alert("El valor que buscas no esta en el array.")
}
*/
//7
/*
var miArray = [1, 2, 3, 45, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 45, 4, 5, 6, 7, 8, 9, 10]
alert(miArray)
var valor = prompt("Introduce un valor a buscar en el array")
for (let i = 0; i < miArray.length; i++) {
    if (valor == miArray[i]) {
        miArray.splice(i, 1)
        i = i - 1
    }

    // Opcion no que o usuario rellena o campo el 
    var miArray = new Array(20)
    var tamArray = 20

    for (var i = 0; i < tamArray; i++) {

        do {
            miArray[i] = prompt("Introduce el valor para la posición " + i);

            if (isNaN(miArray[i]))
                alert("ERROR. Debes ingresar un valor numérico!");

        } while (isNaN(miArray[i]));
    }

    alert(miArray)

    var valor = prompt("Introduce el valor a borrar en el array ");

    for (var i = 0; i < miArray.length; i++) {

        if (valor == miArray[i]) {
            miArray.splice(i, 1) // splice(x, y) elimina y elementos comenzando na posicion x
            i = i - 1 // cada vez que eliminamos un elemento, o noso array disminue, e temos que decrementar i
        }
    }
}
    alert(miArray)
*/
// 8 
/*
tamaño = 15
var ver = new Boolean(false)
var mod
var NArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
for (let i = 15; i <= tamaño; i++) {
alert(NArray)
mod = prompt("Introduce algo")
NArray[i] = mod + NArray[i]
alert(NArray)
}
*/
// 9
