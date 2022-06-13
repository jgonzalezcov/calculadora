'use strict'
//PRUEBAS DE LET Y VAR (DIFERENCIAS VAR ES GLOBAL LET ES A NIVEL DE BLOQUE)
//PRUEBAS CON VAR
var numero = 40
console.log(numero) //valor 40
if (true) {
  var numero = 50
  console.log(numero) //valor50
}
console.log(numero) //valor 50

//PRUEBAS CON LET (LET ACTUA A NIVEL DE BLOQUE POR LO CUAL EN ESTE CASO SOLO SE EJECUTA EN EL IF)
var texto = 'curso'
console.log(texto)
if (true) {
  let texto = 'curso prueba '
  console.log(texto)
}
console.log(texto)
