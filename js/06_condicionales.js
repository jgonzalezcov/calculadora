'use strict'

//CONDICION IF
//SI "A" ES IGUAL A "B"  (PUEDE SER IGUAL(==), MENOR(<),MAYOR(>), MAYOR O IGUAL (>=), MENOR O IGUAL(<=), DISTINTO (!=))
var edad1 = 71
var edad2 = 40
var nombre = 'juan'

//ejemplo1
if (edad1 > edad2) {
  console.log('edad1 es mator que edad2')
} else {
  console.log('la edad es inferior')
}

//ejemplo 2

if (edad1 >= 18) {
  console.log(
    nombre + ' es mayor de edad, ya que tiene ' + String(edad1) + ' años'
  )
  if (edad1 == 33) {
    console.log('Tienes ' + String(edad1) + ' la edad de Cristo')
  } else if (edad1 < 33) {
    console.log('Eres joven con tus ' + String(edad1))
  } else if (edad1 > 70) {
    console.log('estas en la tecera edad con tus ' + String(edad1) + ' años')
  } else {
    console.log('eres una persona madura con juventud')
  }
} else {
  console.log(
    nombre + ' es menor de edad, ya que tiene ' + String(edad1) + ' años'
  )
}

//ejemplo 3 (VARIAS CONDICIONES EN UN SOLO IF)
//"Y" AND = &&, "0" OR = ||, "DISTINTO QUE" = !=

//NEGACION
var year = 2004

if (year != 2016) {
  console.log('Año es distinto a 2016')
}
//AND

if (year >= 2000 && year <= 2020) {
  console.log('El año esta entre 2000 y 2020')
} else console.log('estamos fuera de los años 2000 y 2022')

//OR

if (year == 2018 || year == 2008) {
  console.log('El año termina en 8')
} else console.log('El año no termina en 8')

//CON PARENTESIS PARA AGREGAR UNA CONDICION QUE SEAN DOS O MAS CONDICIONES COMBINADAS

if (year == 2018 || (year >= 2008 && year == 2028)) {
  console.log('El año termina en 8')
} else console.log('Año no registrado')
