const img = document.getElementById('imagem')
const button = document.getElementById('btn')
let intervalId = null
let colorIndex = 0

const trafficLight = (event) => {
    stopAuto()
    turnOn[event.target.id]()

}

const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0
}
const changeColor = () => {
    const colors = ['red', 'ye', 'gr']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
const stopAuto = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = 'imagens/vermelho.png',
    'ye': () => img.src = 'imagens/amarelo.png',
    'gr': () => img.src = 'imagens/verde.png',
    'auto': () => intervalId = setInterval(changeColor, 500)
}

button.addEventListener('click', trafficLight)
