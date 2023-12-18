function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('nascimento')
    var res = document.getElementById('res')
    var img= document.getElementById('imagem')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        var fsex=document.getElementsByName('nSex')
        var id = ano - Number(fano.value)
        var gen =''
        var img= document.createElement('img')
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            gen= 'Homem'
            if(id>=0 && id<12){
                img.setAttribute('src', 'imagens/criancaH.png')
                img.style.display='block'
            }else if(id >=12 && id<18){
                img.setAttribute('src', 'imagens/adolH.png')
                img.style.display='block'
            }else if(id >=18 && id<40){
                img.setAttribute('src', 'imagens/adultH.png')
                img.style.display='block'
            } else{
                img.setAttribute('src', 'imagens/idolH.png')
                img.style.display='block'
            }
        }else if(fsex[1].checked){
            gen= 'Mulher'
            if(id>=0 && id<12){
                img.setAttribute('src', 'imagens/criancaM.png')
                img.style.display ='block'
            }else if (id>=12 && id<=18){
                img.setAttribute ('src', 'imagens/adolM.png')
                img.style.display ='block'
            }else if(id>18 && id<40){
                img.setAttribute ('src', 'imagens/adultM.png')
                img.style.display ='block'
            }else if(id>40){
                img.setAttribute('src', 'imagens/idolM.png')
                img.style.display ='block'
            }
        }
        res.innerHTML=`Você é um ${gen} e tem ${id} anos`
        res.style.textAlign='center'
        res.appendChild(img)
        img.style.margin='auto'
    }

    
}