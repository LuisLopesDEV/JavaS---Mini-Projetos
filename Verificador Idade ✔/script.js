function verificar() {
    let ano = new Date().getFullYear()
    let aNasc = Number(document.getElementById('nascimento').value)
    let res = document.getElementById('res')

    if (aNasc == 0 || aNasc > ano) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        let fSex = document.getElementsByName('nSex')
        let idd = ano - aNasc
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML = ''
        if (fSex[0].checked) {
            gen = 'Homem'
            if (idd >= 0 && idd < 12) {
                img.setAttribute('src', 'imagens/criancaH.png')
            }
            else if (idd >= 12 && idd < 18) {
                img.setAttribute('src', 'imagens/adolH.png')
            } else if (idd >= 18 && idd < 40) {
                img.setAttribute('src', 'imagens/adultH.png')
            } else {
                img.setAttribute('src', 'imagens/idolH.png')
            }
        } else if(fSex[1].checked){
            gen = 'Mulher'
            if (idd >= 0 && idd < 12) {
                img.setAttribute('src', 'imagens/criancaM.png')
            } else if (idd >= 12 && idd <= 18) {
                img.setAttribute('src', 'imagens/adolM.png')
            } else if (idd > 18 && idd < 40) {
                img.setAttribute('src', 'imagens/adultM.png')
            } else {
                img.setAttribute('src', 'imagens/idolM.png')
            }
        }
        img.style.display = 'block';
        res.innerText = `Você é um ${gen} e tem ${idd} anos`
        res.appendChild(img)
    }
}