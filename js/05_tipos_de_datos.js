'use strict'

//  OPERADORES
var num1 = 7
var num2 = 20
var opercion = num1 * num2
alert('el resultado es: ' + opercion)

//  TIPOS DE DATOS
var numero_entero = 44
var cadena_texto = "HOLA 'QUE' TAL" //LAS COMILLAS SIMPLES SON MAS IMPORTANTES (SI SE DESEA COLOCAR COMILLAS EN UN STRING SE DEBE HACER COMO EN EL EJEMPLO)
var booleano = true // puede ser true false o 1 y 0

//  CONVERTIR TIPOS DE DATOS

var numero_falso = '33'

console.log(Number(numero_falso) + 4) //Number, esto lo convierte a un numero (entero, float, decima)
console.log(parseInt(numero_falso) + 4) //esto lo convierte a un numero (entero) (lo redondea siempre hacia arriba)
console.log(parseFloat(numero_falso) + 4) //esto lo convierte a un numero (float)
console.log(String(numero_falso) + 4) //Esto lo convierte en texto

//DETECTAR TIPOS DE DATOS
console.log(typeof numero_falso) //Aca nos muestra el tipo de datos que contiene la variable
