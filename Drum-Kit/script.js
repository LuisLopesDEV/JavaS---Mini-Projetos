'user strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}
const key = (text) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = text
    div.id = text
    document.getElementById('container').appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(key)

const tocarSom = (letra) => {
    const audio = new Audio(`sons/${sons[letra]}`)
    audio.play()
}
const addEfect = (letra) => document.getElementById(letra).classList.add('active')

const removeEfect = (letra) => {
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend',removeActive)
}

const tocar = (evento) => {
    const letra= evento.type=='click'? evento.target.id:evento.key.toUpperCase()
    const isLetra = sons.hasOwnProperty(letra)
    if (isLetra) {
        addEfect(letra)
        tocarSom(letra)
        removeEfect(letra)
    }

}
const keyOn=(evento)=>{
    

}

exibir(sons)
document.getElementById('container').addEventListener('click', tocar)
window.addEventListener('keyup', tocar)