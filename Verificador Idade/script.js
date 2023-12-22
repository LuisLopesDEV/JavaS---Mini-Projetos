function verificar(){
    let ano = new Date().getFullYear()
    let fano =document.getElementById('nascimento')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        let fsex=document.getElementsByName('nSex')
        let idd = ano - Number(fano.value)
        let gen =''
        let img= document.createElement('img')
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            gen= 'Homem'
            if(idd>=0 && idd<12){
                img.setAttribute('src', 'imagens/criancaH.png')
                img.style.display='block'
            }else if(idd >=12 && idd<18){
                img.setAttribute('src', 'imagens/adolH.png')
                img.style.display='block'
            }else if(idd >=18 && idd<40){
                img.setAttribute('src', 'imagens/adultH.png')
                img.style.display='block'
            } else{
                img.setAttribute('src', 'imagens/idolH.png')
                img.style.display='block'
            }
        }else if(fsex[1].checked){
            gen= 'Mulher'
            if(idd>=0 && id<12){
                img.setAttribute('src', 'imagens/criancaM.png')
                img.style.display ='block'
            }else if (idd>=12 && idd<=18){
                img.setAttribute ('src', 'imagens/adolM.png')
                img.style.display ='block'
            }else if(idd>18 && idd<40){
                img.setAttribute ('src', 'imagens/adultM.png')
                img.style.display ='block'
            }else{
                img.setAttribute('src', 'imagens/idolM.png')
                img.style.display ='block'
            }
        }
        res.innerHTML=`Você é um ${gen} e tem ${idd} anos`
        res.style.textAlign='center'
        res.appendChild(img)
        img.style.margin='auto'
    }

    
}