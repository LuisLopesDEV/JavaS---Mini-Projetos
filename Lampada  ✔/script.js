const turnOn= document.getElementById('on')
const turnOff=document.getElementById('off')
const img=document.getElementById('img')

function isLampBroken(){
    return img.src.indexOf('quebrada') > -1
}
function lampOn(){
    if(!isLampBroken()){
        img.src='imagens/ligada.jpg'}
}
function lampOff(){
    if(!isLampBroken()){
        img.src='imagens/desligada.jpg'}
}
function lampBroken(){
    if(!isLampBroken()){
        img.src='imagens/quebrada.jpg'}
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
img.addEventListener('dblclick', lampBroken)
img.addEventListener('mouseenter', lampOn)
img.addEventListener('mouseleave', lampOff)