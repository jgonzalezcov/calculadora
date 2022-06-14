'use strict'
var num_in = ''
var num_guard = 0
var oper = ''
var visor = document.querySelector('#vis_calc')

function concat_num(tec) {
  if (oper == 'reset') {
    num_in = ''
    num_guard = 0
    oper = ''
  }
  if (num_in.length < 10) {
    num_in = num_in + tec
    visor.innerHTML = num_in
  }
}

function limpiar() {
  visor.innerHTML = '0'
  num_in = ''
  num_guard = 0
}

function operacion(signo_oper) {
  num_guard = Number(num_in)
  visor.innerHTML = signo_oper
  oper = signo_oper
  num_in = ''
}
function operacion_especial(val) {
  limpiar()
  oper = val
}

function resultado() {
  switch (oper) {
    case '+':
      num_guard = num_guard + Number(num_in)
      desborde()
      break
    case '-':
      num_guard = num_guard - Number(num_in)
      desborde()
      break
    case '*':
      num_guard = num_guard * Number(num_in)
      desborde()
      break
    case '/':
      num_guard = num_guard / Number(num_in)
      desborde()
      break
    case 'cos':
      if (Number(num_in) == 90 || Number(num_in) == 270) {
        num_guard = 0
      } else {
        num_guard = Math.cos(Number(num_in) * (Math.PI / 180))
      }
      desborde()
      break
  }
}

function desborde() {
  if (Math.trunc(num_guard).toString().length <= 10) {
    if (num_guard.toString().length > 10) {
      visor.innerHTML = num_guard.toString().substring(0, 10)
      num_in = num_guard
      oper = 'reset'
    } else {
      visor.innerHTML = num_guard
      num_in = num_guard
      oper = 'reset'
    }
  } else {
    visor.innerHTML = 'ERROR'
    num_in = ''
    num_guard = 0
    oper = 'reset'
  }
}
