'use strict'
const numeros = document.querySelectorAll('[id*=tecla]')
const opds = document.querySelectorAll('[id*=operador]')
const display = document.getElementById('display')
let nBef;
let opd
let newN = true

const calcPendente = () => opd !== undefined
const calcular = () => {
    if (calcPendente()) {
        const nAtual = parseFloat(display.textContent.replace(',', '.'))
        newN = true
        const resultado = eval(`${nBef}${opd}${nAtual}`)
        attDisplay(resultado)
    }
}

const attDisplay = (text) => {
    if (newN) {
        display.textContent = text.toLocaleString('BR')
        newN = false
    } else {
        display.textContent += text.toLocaleString('BR')
    }

}
const insN = (evento) => attDisplay(evento.target.textContent)
numeros.forEach(numero => numero.addEventListener('click', insN))

const selectOpd = (evento) => {
    if (!newN) {
        calcular()
        newN = true
        opd = evento.target.textContent
        nBef = parseFloat(display.textContent.replace(',', '.'))
    }
}
opds.forEach(opd => opd.addEventListener('click', selectOpd))

const doIgual = () => {
    calcular()
    opd = undefined
}
document.getElementById('igual').addEventListener('click', doIgual)

const limparDisplay = () => display.textContent = ''
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {
    limparDisplay()
    opd = undefined
    newN = true
    nBef = undefined
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const apagar = () => display.textContent = display.textContent.slice(-1)
document.getElementById('backspace').addEventListener('click', apagar)

const invert = () => {
    newN = true
    attDisplay(display.textContent * -1)
}
document.getElementById('inverter').addEventListener('click', invert)

const hasDecimal = () => display.textContent.indexOf(',') !== -1
const hasValor = () => display.textContent.length > 0
const insDecimal = () => {
    if (!hasDecimal()) {
        if (hasValor()) {
            attDisplay(',')
        } else {
            attDisplay('0,')
        }
    }
}
document.getElementById('decimal').addEventListener('click', insDecimal)

const mapKeyboard = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
}
const mapKey = (evento) => {
    const tecla = evento.key
    const free = () => Object.keys  (mapKeyboard).indexOf(tecla) !== -1
    if (free()) document.getElementById(mapKeyboard[tecla]).click()
}
document.addEventListener('keydown', mapKey)