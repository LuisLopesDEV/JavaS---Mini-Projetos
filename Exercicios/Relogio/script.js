function carregar(){
var quad = document.getElementById('quadH')
var img = document.getElementById('imagem')
var hora = new Date()
var agr = hora.getHours()
quadH.innerHTML = `Agora são ${agr} horas.`
if (agr >= 0 && agr < 12) {
    document.body.style.background = '#2EC4B6'
    img.src = 'imagens/fotomanha.jpg'
} else if (agr >= 12 && agr <= 18) {
    document.body.style.background = '#dd864f'
    img.src = 'imagens/fototarde.jpg'
} else {
    document.body.style.background = '#011627'
    h1.style.color ='white'
    img.src = 'imagens/fotonoite.jpg'
}
}