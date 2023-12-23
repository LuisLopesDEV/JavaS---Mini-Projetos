const img = document.getElementById('imagem')
const button = document.getElementById('btn')
let intervalId = null
let colorIndex = 0

const nextIndex=()=>colorIndex=colorIndex<2?++colorIndex : 0;

const trafficLight = (evento) => {
    stopA()
    turnOn[evento.target.id]()
}

const changeColor=()=>{
    const colors=['red','ye','gr']
    const color=colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
const stopA=()=>clearInterval(intervalId);
const turnOn = {
    'red': () => img.src = 'imagens/vermelho.png',
    'ye': () => img.src = 'imagens/amarelo.png',
    'gr': () => img.src = 'imagens/verde.png',
    'auto': () => intervalId = setInterval(changeColor, 550)
}
button.addEventListener('click', trafficLight)
