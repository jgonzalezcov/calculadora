'use strict'
//SWITCH
console.log('switch')
var edad = 40
var imprime = ''

switch (edad) {
  case 18:
    imprime = 'Acabas de cumpliar la mayotia de edad'
    break
  case 25:
    imprime = 'Ya eres un adulto'
    break
  case 40:
    imprime = 'Crisis de los 40'
    break
  case 75:
    imprime = 'Eres ya mayor de edad'
    break
  default:
    imprime = 'Tu edad es neutra'
}
console.log(imprime)
