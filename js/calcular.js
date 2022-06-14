'use strict'
var num_in = ''
var num_guard = 0
var oper = ''
var resul = 0
var visor = document.querySelector('#vis_calc')

function concat_num(tec) {
  if (oper == 'reset') {
    num_in = ''
    num_guard = 0
    oper = ''
  }
  num_in = num_in + tec
  visor.innerHTML = num_in
}

function limpiar() {
  visor.innerHTML = '0'
  num_in = ''
  num_guard = 0
}

function sumar() {
  num_guard = Number(num_in)
  visor.innerHTML = '+'
  oper = '+'
  num_in = ''
}

function restar() {
  num_guard = Number(num_in)
  visor.innerHTML = '-'
  oper = '-'
  num_in = ''
}

function multiplica() {
  num_guard = Number(num_in)
  visor.innerHTML = '*'
  oper = '*'
  num_in = ''
}

function divide() {
  num_guard = Number(num_in)
  visor.innerHTML = '/'
  oper = '/'
  num_in = ''
}
function resultado() {
  switch (oper) {
    case '+':
      num_guard = num_guard + Number(num_in)
      visor.innerHTML = num_guard
      num_in = num_guard
      oper = 'reset'
      break
    case '-':
      num_guard = num_guard - Number(num_in)
      visor.innerHTML = num_guard
      num_in = num_guard
      oper = 'reset'
      break
    case '*':
      num_guard = num_guard * Number(num_in)
      visor.innerHTML = num_guard
      num_in = num_guard
      oper = 'reset'
      break
    case '/':
      num_guard = num_guard / Number(num_in)
      visor.innerHTML = num_guard
      num_in = num_guard
      oper = 'reset'
      break
  }
}
